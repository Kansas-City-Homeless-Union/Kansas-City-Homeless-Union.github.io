// for text that isn't inside a managed container already
export const determineTextWidth = (screenWidth: number) => {
  if (screenWidth > 1000) {
    return "50%";
  }
  if (screenWidth > 700) {
    return "75%";
  }
  if (screenWidth > 500) {
    return "85%";
  }
  return "100%";
};
