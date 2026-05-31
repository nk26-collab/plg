async function loadModules(){
  const res = await fetch('./js/modules.json');
  const modules = await res.json();

  for(const path of modules){
    try{
      await import(path);
    }catch(e){
      console.warn('module load failed:', path, e);
    }
  }
}

loadModules();