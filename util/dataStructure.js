export function getReduceFruitWithInsects(fruitsWithInsects) {
  const fruitWithInsects = {
    id: fruitsWithInsects[0].fruitId,
    name: fruitsWithInsects[0].fruitName,
    icon: fruitsWithInsects[0].fruitIcon,
    insects: fruitsWithInsects.map((insect) => {
      return {
        id: insect.insectId,
        name: insect.insectName,
      };
    }),
  };
  return fruitWithInsects;
}
