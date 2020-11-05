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

const bucket = 'https://firebasestorage.googleapis.com/v0/b/magna-certa.appspot.com/o/';

interface IndexObject {
  name: string;
  bucket: string;
}

export async function listObjectIndex(): Promise<IndexObject[]> {
  const res = await fetch(bucket);
  const data = await res.json();
  return data.items;
}

export async function getObject(name: string) {
  const res = await fetch(`${bucket}${encodeURIComponent(name)}?alt=media`);
  const data = await res.json();
  return data;
}

export async function listObjects(names: string[]) {
  const data = await Promise.all(names.map(getObject));
  return data;
}
