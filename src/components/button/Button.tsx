import { Button } from "@mui/material";
import { SxProps, Theme } from "@mui/system";

type CustomStyle = "default" | "pink" | "rounded";

interface ButtonProps {
  variant?: "text" | "outlined" | "contained";
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  endIcon?: React.ReactNode;
  sx?: SxProps<Theme>;
  customStyle?: CustomStyle;
}

export default function ButtonComponent({
  variant = "text",
  disabled = false,
  onClick,
  className,
  children,
  endIcon,
  sx,
  customStyle = "default",
}: ButtonProps) {
  const getCustomStyles = (): SxProps<Theme> => {
    switch (customStyle) {
      case "pink":
        return {
          backgroundColor: "#ff69b4",
          color: "#0000ff",
          borderRadius: "20px",
          padding: "8px 16px",
          "&:hover": {
            backgroundColor: "#ff1493",
          },
          ...sx
        };
      case "rounded":
        return {
          borderRadius: "25px",
          padding: "10px 20px",
          ...sx
        };
      default:
        return sx || {};
    }
  };

  return (
    <Button
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      className={className}
      endIcon={endIcon}
      sx={getCustomStyles()}
    >
      {children}
    </Button>
  );
}
