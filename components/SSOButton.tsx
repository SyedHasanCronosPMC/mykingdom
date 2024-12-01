import { Button } from "@/mykingdom/components/ui/button";
import { ButtonProps } from "@/mykingdom/components/ui/button";

interface SSOButtonProps {
  provider: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const SSOButton = ({ provider, icon, onClick }: SSOButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="w-full flex items-center gap-2 justify-center border"
    >
      {icon}
      <span>Continue with {provider}</span>
    </Button>
  );
};

export default SSOButton; 