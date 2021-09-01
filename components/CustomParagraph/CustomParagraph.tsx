import React from 'react';
import {CustomParagraphProps} from './CustomParagraph.props';
import classNames from 'classnames';
import styles from './CustomParagraph.module.scss';

export const CustomParagraph = ({fontSize='16',children}:CustomParagraphProps): JSX.Element => {
    return (
        <p className={classNames(styles.paragraph,{
            [styles.paragraph14px] : fontSize === '14',
            [styles.paragraph16px] : fontSize === '16',
            [styles.paragraph18px] : fontSize === '18',
        })}>
            {children}
        </p>
    );
};