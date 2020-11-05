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

import fetch from 'cross-fetch';
import { getRealm } from '../database';
import { RULES_LIST_SCHEMA_NAME } from '../database/schemas/RulesListSchema';

async function customFetch(url: string) {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

interface Rule {
  id: string;
  rule: string;
}

interface RulesList {
  name: string;
  rules: unknown[];
}

export async function getRules(url: string): Promise<RulesList[]> {
  try {
    const res = await customFetch(url);
    const rules = await res.json();
    await rulesSave(rules);
    return rules;
  } catch (error) {
    console.log(`Error while getting rules: ${error}`);
  }
  return [];
}

export const rulesSave = async (rules: RulesList[]) => {
  const realm = await getRealm();
  realm.write(() => {
    rules.forEach((item) =>
      realm.create(
        RULES_LIST_SCHEMA_NAME,
        {
          id: item.name,
          value: JSON.stringify(item)
        },
        true
      )
    );
  });
};

export const rulesList = async () => {
  const realm = await getRealm();
  const objects = realm.objects<{ value: string }>(RULES_LIST_SCHEMA_NAME);
  return Array.from(objects).map((item) => JSON.parse(item.value));
};

export const rulesCount = async () => {
  const realm = await getRealm();
  return realm.objects(RULES_LIST_SCHEMA_NAME).length;
};

export async function rulesSync(url: string, force?: boolean) {
  try {
    const count = await rulesCount();

    if (force || !count) {
      await getRules(url);
    }
  } catch (error) {
    return [];
  }
}
