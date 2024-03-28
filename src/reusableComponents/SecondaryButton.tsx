import React from "react";

type SecondaryButtonProps = {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const SecondaryButton: React.FunctionComponent<SecondaryButtonProps> = ({children, onClick}) =>
    <button className='button button-secondary' onClick={onClick}>{children}</button>

export default SecondaryButton;