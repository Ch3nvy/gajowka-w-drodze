import { Button } from "@mui/material";

interface ButtonProps {
  variant?: "text" | "outlined" | "contained"; // Typ wyliczeniowy dla wariantu
  disabled?: boolean; // Czy przycisk ma być nieaktywny
  onClick?: () => void; // Funkcja wywoływana przy kliknięciu
  children?: React.ReactNode; // Zawartość przycisku
  className?: string; // Dodatkowe klasy CSS
  endIcon?: React.ReactNode;
  sx?: any;
}

export default function ButtonComponent({
  variant = "text",
  disabled = false,
  onClick,
  className,
  children,
  endIcon,
  sx,
}: ButtonProps) {
  return (
    <Button
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      className={className}
      endIcon={endIcon}
      sx={sx}
    >
      {children}
    </Button>
  );
}
