"use server";

export const formAction = async (previousState: number) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000)); // 1s delay
  console.log(previousState);
  return previousState + 1;
};
