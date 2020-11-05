import Realm from 'realm';
import RulesListSchema from './schemas/RulesListSchema';

let realm: Realm | null = null;

export async function getRealm() {
  if (realm) {
    return realm;
  }

  realm = await Realm.open({schema: [RulesListSchema]});

  return realm;
}
