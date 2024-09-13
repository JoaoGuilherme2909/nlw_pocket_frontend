import logo from "../assets/logo.svg";
import letsStart from "../assets/illustration_lets-start.svg";
import { DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="In.orbit logo" />
      <img src={letsStart} alt="Girl pressing a button to start a rocket" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
        mesmo?
      </p>

      <DialogTrigger asChild>
        <Button variant="primary">
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
