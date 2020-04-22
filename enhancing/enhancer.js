module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const { enhancement } = item;
  const limit = 20;
  return { 
    ...item,
    enhancement: enhancement < limit ? enhancement + 1 : enhancement
  };
}

function fail(item) {
  const { enhancement, durability } = item;
  
  let updatedDurability = enhancement < 15 
    ? durability - 5 
    : durability - 10;

  if (updatedDurability < 0) {
    updatedDurability = 0;
  }
  
  return { 
    ...item,
    durability: updatedDurability,
    enhancement: enhancement > 16 ? enhancement - 1 : enhancement
  };
}

function repair(item) {
  return { 
    ...item,
    durability: 100
  };
}

function get(item) {
  const { name, enhancement, durability } = item;

  let updatedName = name;
  if (enhancement > 0 ) {
      updatedName = '[+' + enhancement + '] ' + name;
  }

  return {
    ...item,
    name: updatedName
  };
}
