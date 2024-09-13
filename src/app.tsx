import { Dialog } from "./components/ui/dialog";
import { CreateGoal } from "./components/create-goal";
import { Summary } from "./components/summary";
import { EmptyGoals } from "./components/empty-goals";
import { useQuery } from "@tanstack/react-query";
import { getSummaryResponse } from "./http/get-summary-response";

export function App() {
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummaryResponse,
    staleTime: 1000 * 60,
  });

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  );
}
