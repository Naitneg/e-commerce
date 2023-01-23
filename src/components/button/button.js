import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles.js";

export const BUTTON_STYLES_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};
const getButton = (buttonType = BUTTON_STYLES_CLASSES.base) =>
  ({
    [BUTTON_STYLES_CLASSES.base]: BaseButton,
    [BUTTON_STYLES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_STYLES_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
