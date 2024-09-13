interface CreateGoalRequest {
  title: string;
  desiredWeeklyFrequency: number;
}

export async function createGoal({
  desiredWeeklyFrequency,
  title,
}: CreateGoalRequest) {
  await fetch("http://localhost:3333/goals", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title,
      desiredWeeklyFrequency,
    }),
  });
}
