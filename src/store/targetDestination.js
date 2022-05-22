export const getTargetDestination = (arr, ID) => {
  const destinaionIndex = arr.findIndex((destination) => destination.id === ID);
  const targetDestination = arr[destinaionIndex];
  return targetDestination;
};
