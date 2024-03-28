import React from "react";

type PrimaryButtonProps = {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const PrimaryButton: React.FunctionComponent<PrimaryButtonProps> = ({children, onClick}) =>
    <button onClick={onClick} className='button button-primary'>{children}</button>

export default PrimaryButton;