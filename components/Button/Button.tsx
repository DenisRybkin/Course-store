import React from 'react';
import styles from './Button.module.scss';
import {ButtonProps} from './Button.props';
import classnames from 'classnames';
import ArrowSvg from './arrow.svg';

export const Button = ({appearance,children,arrow='none', ...props}: ButtonProps): JSX.Element => {
    console.log(arrow);
    return (
        <button className={classnames(styles.button, {
            [styles.primary] : appearance === 'primary',
            [styles.ghost] : appearance === 'ghost',
        })} {...props} >
            {children}
            {arrow !== 'none' && <span className={classnames(styles.arrow,{
                [styles.arrowDown]: arrow === 'down',
                [styles.arrowRight]: arrow === 'right',
            })}> <ArrowSvg/> </span>}
        </button>
    );
};