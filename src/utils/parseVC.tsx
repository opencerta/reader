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

import get from 'lodash/get';

export function FHIRCredential(credential: object) {
  try {
    const patientName = get(credential, 'credentialSubject.givenName', '');
    const patientFamily = get(credential, 'credentialSubject.familyName', '');
    const patientGender = get(credential, 'credentialSubject.gender', '');
    const patientBirthDate = '';
    const patientPhoto = get(credential, 'credentialSubject.photograph', '');
    const practitionerPrefix = '';
    const practitionerName = '';
    const practitionerFamily = '';
    const organization = get(credential, 'credentialSubject.performer.display', '');
    const lotNumber = '';
    const vaccine = '';
    const vaccineCode = '';
    const status = '';
    const country = '';

    return {
      patientName,
      patientFamily,
      patientGender,
      patientBirthDate,
      patientPhoto,
      practitionerPrefix,
      practitionerName,
      practitionerFamily,
      organization,
      lotNumber,
      vaccine,
      vaccineCode,
      status,
      country
    };
  } catch (error) {
    return {};
  }
}

export function Immunization(credential: object) {
  try {
    const patientName = get(credential, 'credentialSubject.contained.0.name.0.given.0', '');
    const patientFamily = get(credential, 'credentialSubject.contained.0.name.0.family', '');
    const patientGender = get(credential, 'credentialSubject.contained.0.gender', '');
    const patientBirthDate = get(credential, 'credentialSubject.contained.0.birthDate', '');
    const patientPhoto = get(credential, 'credentialSubject.contained.0.photo.0.data', '');
    const practitionerPrefix = get(credential, 'credentialSubject.contained.3.name.0.prefix.0', '');
    const practitionerName = get(credential, 'credentialSubject.contained.3.name.0.given.0', '');
    const practitionerFamily = get(credential, 'credentialSubject.contained.3.name.0.family', '');
    const organization = get(credential, 'credentialSubject.contained.1.name', '');
    const lotNumber = get(credential, 'credentialSubject.lotNumber', '');
    const vaccine = get(credential, 'credentialSubject.vaccineCode.text', '');
    const vaccineCode = get(credential, 'credentialSubject.vaccineCode.coding.0.code', '');
    const status = get(credential, 'credentialSubject.status', '');
    const country = get(credential, 'credentialSubject.contained.2.address.country', '');

    return {
      patientName,
      patientFamily,
      patientGender,
      patientBirthDate,
      patientPhoto,
      practitionerPrefix,
      practitionerName,
      practitionerFamily,
      organization,
      lotNumber,
      vaccine,
      vaccineCode,
      status,
      country
    };
  } catch (error) {
    return {};
  }
}

type parser = (credential: object) => object;

const parserMap: Record<string, parser> = {
  FHIRCredential: FHIRCredential,
  Immunization: Immunization
};

export function parseVC(credential: object) {
  try {
    const type =
      get(credential, 'credentialSubject.type', null) || get(credential, 'credentialSubject.resourceType', null);

    const parser = get(parserMap, type, null);

    if (!parser) {
      return {};
    }

    return parser(credential);
  } catch (error) {
    return {};
  }
}
