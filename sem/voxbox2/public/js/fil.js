let un=[];
let pa=[];
let em=[];
async function load(){
    let request = new Request("data.json");
    let response = await fetch(request);
    let obj = await response.json();
    ldmd(obj);
  }
  load();
function ldmd(obj)
{
    let ud = obj['ud'];
    for(let udt of ud)
    {
      for(let i=0;i<(udt.u).length;i++)
        {
            un.push((udt.u)[i]);
            pa.push((udt.p)[i]);
            em.push((udt.e)[i]);
        }
    }
}