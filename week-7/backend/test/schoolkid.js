import test from 'ava';
import request from 'supertest';
import app from '../app';

// test ('Create new schoolkid', async t => {
//   t.plan (6);

//   const schoolkidToCreate = {
//     name: 'Ekaterina',
//     surname: 'Ivanova',
//     gender: 'Frau',
//     grades: [],
//     parents: [],
//   };

//   const res = await request (app)
//   .post ('/schoolkid')
//   .send (schoolkidToCreate);

//   // checking for server response status success
//   t.is (res.status, 200);

//   // comparing the created person's data
//   t.is (res.body.name, schoolkidToCreate.name);
//   t.is (res.body.surname, schoolkidToCreate.surname);
//   t.is (res.body.gender, schoolkidToCreate.gender);
//   t.deepEqual (res.body.grades, schoolkidToCreate.grades);
//   t.deepEqual (res.body.parents, schoolkidToCreate.parents);
// });

// test ('Fetch a schoolkid', async t => {
//   t.plan (4);
//   const schoolkidToCreate = {
//     name: 'Mariia',
//     surname: 'Sokolova',
//     gender: 'Frau',
//     grades: [],
//     parents: [],
//   };

//   const resUser = await request (app)
//     .post ('/schoolkid')
//     .send (schoolkidToCreate);

//   // checking for server response status success
//   t.is (resUser.status, 200);

//   // first create a schoolkid
//   const mariiaUserCreated = resUser.body;

//   // fetch the schoolkid we just created
//   const fetchRes = await request (app).get (
//     `/schoolkid/${mariiaUserCreated._id}`
//   );
//   // checking for server response status success
//   // this endpoint is rendering into HTML
//   t.is (fetchRes.status, 200);

//   const fetchResJson = await request (app).get (
//     `/schoolkid/${mariiaUserCreated._id}/json`
//   );
//   // checking for server response status success
//   t.is (fetchResJson.status, 200);

//   // this endpoint is responding with the user detail JSON data
//   //  compare the fetched user with created user
//   const mariiaUserFetched = fetchResJson.body;
//   t.deepEqual (mariiaUserFetched, mariiaUserCreated);
// });

// test ('Delete a schoolkid', async t => {
//   t.plan (4);

//   // first create a schoolkid
//   const schoolkidToCreate = {
//     name: 'Sergey',
//     surname: 'Ivanov',
//     gender: 'Herr',
//     grades: [],
//     parents: [],
//   };
//   const sergeyUserCreated = (await request (app)
//     .post ('/schoolkid')
//     .send (schoolkidToCreate)).body;

//   // delete the schoolkid
//   const deleteRes = await request (app).delete (
//     `/schoolkid/${sergeyUserCreated._id}`
//   );
//   // checking for server response status success
//   t.is (deleteRes.status, 200);
//   t.is (deleteRes.ok, true);

//   // trying to render the detail page for the deleted user
//   const fetch = await request (app).get (`/schoolkid/${sergeyUserCreated._id}`);
//   // checking for server response status - page not found 404
//   t.is (fetch.status, 404);

//   // trying to fetch the JSON data of the deleted user
//   const fetchJson = await request (app).get (
//     `/schoolkid/${sergeyUserCreated._id}/json`
//   );
//   // checking for server response status - page not found 404
//   t.is (fetchJson.status, 404);
// });

test ('Get list of schoolkid', async t => {
  t.plan (4);

  console.log('1')
  // first create a schoolkid to ensure that
  // there will be at least 1 user in schoolkid's list
  const schoolkidToCreate = {
    name: 'AlexandraEkaterina',
    surname: 'Sergeevna',
    gender: 'Frau',
    grades: [],
    parents: [],
  };
  console.log('2')

  const resKid = await request(app)
    .post('/schoolkid')
    .send(schoolkidToCreate);
 console.log('3')
  t.is(resKid.status, 200);
  console.log('4')
  // get the list of schoolkid - JSON
  const jsonRes = await request(app).get('/schoolkid/all/json');
  console.log('4б5')
  // checking for server response status success
  t.is(jsonRes.status, 200);
  console.log('5')
  // check the response whether it is an array
  t.true(Array.isArray(jsonRes.body), 'Body should be an array');
  console.log('6')
  // check the response whether at least there is 1 element
  t.true(jsonRes.body.length > 0);

  console.log('7')
});
