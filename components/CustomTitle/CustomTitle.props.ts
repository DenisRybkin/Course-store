import {ReactNode} from "react";

export interface CustomTitleProps {
    tag: 'h1' | 'h2' | 'h3';
    children : ReactNode;
}