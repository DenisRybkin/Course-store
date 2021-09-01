import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface CustomParagraphProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    fontSize ?: '14' | '16' | '18',
    children : ReactNode,
}