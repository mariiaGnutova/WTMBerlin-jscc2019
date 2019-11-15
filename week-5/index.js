const KidsService = require ('./services/service-schoolkid');
const ParentService = require ('./services/service-parent');
const express = require ('express');
const bodyParser = require ('body-parser');

const app = express ();

app.set ('view engine', 'pug');
app.use (bodyParser.json ());

app.get ('/', (req, res) => {
  res.render ('index');
});

app.get ('/kids/all', async (req, res) => {
  const kids = await KidsService.findAll ();
  //res.send(kids)
  res.render ('schoolkids', {schoolkids: kids});
});

app.get ('/parents/all', async (req, res) => {
  const parents = await ParentService.findAll ();
  //res.send(kids)
  res.render ('parents', {parents: parents});
});

//axios.post('/parents/35/addKids/7').then(console.log)
app.post ('/parents/:parentId/addKids/:kidId', async (req, res) => {
  const allParents = await ParentService.findAll ();
  const parent = allParents.find (p => p.id == req.params.parentId);
  var newArray = [];
  parent.schoolkidsID.forEach (element => {
    newArray.push (element);
  });
  newArray.push (parseInt (req.params.kidId));
  parent.schoolkidsID = newArray;
  console.log ('KIDS: ' + parent.schoolkidsID);
  await ParentService.saveAll (allParents);

  const allKids = await KidsService.findAll ();
  const child = allKids.find (p => p.id == req.params.kidId);
  var parentArray = [];
  child.parents.forEach (element => {
    parentArray.push(element);
  });
  parentArray.push(parent);
  child.parents = parentArray;
  await KidsService.saveAll (allKids);
 
  res.send (await ParentService.find (req.params.parentId));
});

app.get ('/parents/:parentId', async (req, res) => {
  res.send (await ParentService.find (req.params.parentId));
});

//axios.delete('/parents/34').then(console.log)
app.delete ('/parents/:id', async (req, res) => {
  const toDelet = await ParentService.find (req.params.id);
  await ParentService.del (req.params.id);
  res.send ('Ok' + toDelet);
});

app.get ('/kids/:idParam', async (req, res) => {
  const id = req.params.idParam;
  const child = await KidsService.find (id);
  res.send (child);
});

//axios.post('/kids', {name: 'Mari', surname: 'Gnutova'}).then(console.log)
app.post ('/kids', async (req, res) => {
  //console.log(req.body)
  const kid = await KidsService.add (req.body);
  res.send (kid);
});

//axios.delete('/kids/5').then(console.log)
app.delete ('/kids/:id', async (req, res) => {
  const toDelet = await KidsService.find (req.params.id);
  await KidsService.del (req.params.id);
  res.send ('Ok' + toDelet);
});

//axios.post('/kids/5/assignToClass/6A').then(console.log)
app.post ('/kids/:id/assignToClass/:schoolckass', async (req, res) => {
  const allKids = await KidsService.findAll ();
  const child = allKids.find (p => p.id == req.params.id);
  child.SClass = req.params.schoolckass;
  await KidsService.saveAll (allKids);
  res.send (await KidsService.find (req.params.id));
});

app.listen (3010, () => {
  console.log ('Server listening');
});
