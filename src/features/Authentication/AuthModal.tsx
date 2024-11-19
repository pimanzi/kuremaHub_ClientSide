import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Register from "./Register";

export function AuthModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {<Register></Register>}
      </DialogContent>
    </Dialog>
  );
}
