// @opencerta/essentials
// Copyright (C) 2020 OpenCerta
//
// This library is free software; you can redistribute it and/or
// modify it under the terms of the GNU Lesser General Public
// License as published by the Free Software Foundation; either
// version 3.0 of the License, or (at your option) any later version.
//
// This library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA

import { getRules, rulesList as getRulesLists } from '../services/rules';
import { Engine, Rule, RuleProperties } from 'json-rules-engine';
import rulesCustomOperators from './rulesOperators';

const status = {
  ORANGE: 'ORANGE',
  GREEN: 'GREEN',
  RED: 'RED'
};

const results = {
  noSchemas: {
    status: status.ORANGE,
    message: 'No available schemas to verify structure'
  },
  noRulesList: {
    status: status.ORANGE,
    message: 'No available rulesLists to verify certa'
  },
  unknowStructure: {
    status: status.ORANGE,
    message: 'Did not match any valid structure'
  },
  valid: {
    status: status.GREEN,
    message: 'Valid certa'
  },
  invalid: {
    status: status.RED,
    message: 'Invalid certa'
  }
};

interface RulesList {
  name: string;
  rules: Array<RuleProperties>;
}

interface RulesObject {
  [key: string]: RuleProperties;
}

interface VerificationResult {
  status: string;
  rulesList: string | null;
  message: string;
}

async function verifyRulesList(fact: unknown, rulesList: RulesList) {
  try {
    const verificationResults: Record<string, boolean> = {};
    const engine = new Engine();

    rulesCustomOperators.forEach((e) => engine.addOperator(e));

    rulesList.rules.forEach((rule) => engine.addRule(new Rule(rule)));

    // Triggered events after rule resolution
    engine.on('success', (event, almanac, ruleResult) => {
      verificationResults[ruleResult.name] = ruleResult.result;
    });

    engine.on('failure', (event, almanac, ruleResult) => {
      verificationResults[ruleResult.name] = ruleResult.result;
    });

    await engine.run({ data: fact });

    const verificationResultsArray = Object.keys(verificationResults).map((e) => {
      return verificationResults[e];
    });

    if (verificationResultsArray.indexOf(false) !== -1) {
      return null;
    }

    return rulesList.name;
  } catch (error) {
    return null;
  }
}

async function verifyAllRulesList(fact: unknown, rulesLists: RulesList[]): Promise<string | null> {
  for (const rulesList of rulesLists) {
    const listVerificationResult = await verifyRulesList(fact, rulesList);
    if (listVerificationResult) {
      return listVerificationResult;
    }
  }
  return null;
}

export async function verify(fact: unknown): Promise<VerificationResult> {
  const rulesLists = await getRulesLists();
  if (!rulesLists.length) {
    return { ...results.noRulesList, rulesList: null };
  }

  const listVerificationResult = await verifyAllRulesList(fact, rulesLists);

  if (listVerificationResult) {
    return { ...results.valid, rulesList: listVerificationResult };
  }

  return { ...results.invalid, rulesList: null };
}

interface SyncStats {
  rules: number;
  rulesTook: number;
}

export async function syncData(url: string): Promise<SyncStats> {
  const rulesTimeStart = Date.now();
  const rules = await getRules(url);
  console.log(`SyncData found rules in db: ${rules.length}`);
  const rulesTimeEnd = Date.now();

  return {
    rules: rules.length,
    rulesTook: rulesTimeEnd - rulesTimeStart
  };
}
