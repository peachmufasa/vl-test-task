import React from "react";

type AlertButtonProps = {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const AlertButton: React.FunctionComponent<AlertButtonProps> = ({children}) =>
    <button className='button button-alert'>{children}</button>

export default AlertButton;