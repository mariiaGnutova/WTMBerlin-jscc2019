import test from 'ava'
import request from 'supertest'
import app from '../app'
test(t => t.fail())

test('Create new schoolkid', async t => {
    t.plan(3)
    const schoolkidToCreate = {
      name: 'Ekaterina',
      surname: 'Ivanova',
      gender: 'Frau',
      grades:[],
      parents: [],
      schoolClass: {},
    }
  
    const res = await request(app)
      .post('/schoolkid')
      .send(schoolkidToCreate)
  
    // checking for server response status success
    t.is(res.status, 200)
  
    // comparing the created person's data
    t.is(res.body.name, schoolkidToCreate.name)
    t.is(res.body.surname, schoolkidToCreate.surname)
  })