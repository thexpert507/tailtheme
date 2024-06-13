export type TailthemeColor = {
  base: string;
  hover: string;
  ring: string;
  focus: string;
  disabled: string;
  contrast: string;
  soft: string;
  softContrast: string;
};

export type Tailtheme = {
  colors: {
    primary: TailthemeColor;
    accent: TailthemeColor;
    info: TailthemeColor;
    success: TailthemeColor;
    warning: TailthemeColor;
    danger: TailthemeColor;
    neutral: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
    background: {
      primary: string;
      secondary: string;
      contrast: string;
    }
  };
};
