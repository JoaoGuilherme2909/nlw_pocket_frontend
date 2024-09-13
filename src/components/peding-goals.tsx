import { getPendingGoals } from "../http/get-pending-goals";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { OutlineButton } from "./ui/outline-button";
import { Plus } from "lucide-react";
import { createGoalCompletion } from "../http/create-goal-completion";

export function PendingGoals() {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["pendingGoals"],
    queryFn: getPendingGoals,
  });

  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion(goalId);

    queryClient.invalidateQueries({ queryKey: ["summary"] });
    queryClient.invalidateQueries({ queryKey: ["pendingGoals"] });
  }

  if (!data) return null;
  return (
    <div className="flex flex-wrap gap-3">
      {data.map((goal) => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={goal.completionsCount >= goal.desiredWeeklyFrequency}
            onClick={() => handleCompleteGoal(goal.id)}
          >
            <Plus className="size-4 text-zinc-400" />
            {goal.title}
          </OutlineButton>
        );
      })}
    </div>
  );
}
