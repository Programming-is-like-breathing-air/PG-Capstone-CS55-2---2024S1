import React from "react";
import Theme from "../layout/componentTheme";

export const Modal = () => {
  return (
    <Theme
      componentName="modal"
      componentStyle="normal"
      // backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
      componentReactView="NormalModal"
    />
  );
};

export const ModalWithPic = () => {
  return (
    <Theme
      componentName="modal"
      componentStyle="withPic"
      // backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
      componentReactView="PictureModal"
    />
  );
};

export const Confirm = () => {
  return (
    <Theme
      componentName="modal"
      componentStyle="confirm"
      // backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
      componentReactView="ConfirmModal"
    />
  );
};

export const Notice = () => {
  return (
    <Theme
      componentName="modal"
      componentStyle="notice"
      // backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
      componentReactView="NoticeModal"
    />
  );
};

export const Login = () => {
  return (
    <Theme
      componentName="modal"
      componentStyle="login"
      // backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
      componentReactView="LoginModal"
    />
  );
};

export const Signup = () => {
  return (
    <Theme
      componentName="modal"
      componentStyle="signup"
      // backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
      componentReactView="SignupModal"
    />
  );
};
