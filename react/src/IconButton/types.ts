export interface IProps {
  src: string;
  type: "primary";
  handlePress: () => void;
  sm?: boolean;
  warning?: boolean;
  disabled?: boolean;
  testingCtx?: string;
  dimensions?: {
    wrapper: number,
    icon: number
  }
}
