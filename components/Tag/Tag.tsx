import React from 'react';
import {TagProps} from "./Tag.props";
import classnames from "classnames";
import styles from "./Tag.module.scss";

export const Tag = ({size,color,children,href}:TagProps): JSX.Element => {
    return (
        <div className={classnames(styles.tag, {
            [styles.s] : size === 's',
            [styles.m] : size === 'm',
            [styles.primary] : color === 'primary',
            [styles.ghost] : color === 'ghost',
            [styles.green] : color === 'green',
            [styles.gray] : color === 'grey',
            [styles.red] : color === 'red'
        })}>
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};