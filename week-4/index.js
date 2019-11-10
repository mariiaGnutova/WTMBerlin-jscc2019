const KidsService = require ('./services/service-schoolkid');
const express = require ('express');
const bodyParser = require ('body-parser');

const app = express ();

app.set ('view engine', 'pug');
app.use (bodyParser.json ());

app.get ('/', (req, res) => {
  res.render ('index');
});

app.get ('/kids/all', async (req, res) => {
  const kids = await KidsService.findAll();
  //res.send(kids)
  res.render ('schoolkids', {schoolkids: kids});
});

app.get ('/kids/:idParam', async(req, res) => {
  const id = req.params.idParam
  const child = await KidsService.find(id);
  res.send(child)
})

//axios.post('/kids', {name: 'Mari', surname: 'Gnutova'}).then(console.log)
app.post ('/kids', async(req, res)=>{
  //console.log(req.body)
  const kid = await KidsService.add(req.body);
  res.send(kid)
})

//axios.delete('/kids/5').then(console.log)
app.delete('/kids/:id', async(req, res)=>{
  const toDelet = await KidsService.find(req.params.id)
  await KidsService.del(req.params.id)
  res.send("Ok" + toDelet)
})

//axios.post('/kids/assignToClass/5A/6').then(console.log)
app.post ('/kids/assignToClass/:schoolckass/:id', async(req, res)=>{
 const allKids = await KidsService.findAll()
 const child = allKids.find(p => p.id == req.params.id)
 child.SClass = req.params.schoolckass
 await KidsService.saveAll(allKids)
 res.send(await KidsService.find(req.params.id))
})


app.listen (3010, () => {
  console.log ('Server listening');
});
