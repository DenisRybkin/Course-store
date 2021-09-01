import React , {KeyboardEvent} from 'react';
import {RatingProps} from "./Rating.props";
import styles from './Rating.module.scss';
import StarSvg from './star.svg';
import classNames from "classnames";

export const Rating = ({isEditable=false, rating, setRating, ...props}: RatingProps) : JSX.Element => {

    const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>));

    const onChangeDisplay = (index: number) :void => {
        if(isEditable){
            constructRating(index);
        }
    };

    const onSelectRating = (index : number) : void => {
        if(isEditable || setRating){
            setRating(index);
        }
    };

    const handleSpace = (index: number, event: KeyboardEvent<SVGAElement>) :void => {
        if(event.code !== 'Space' || !setRating){
            return;
        } else {
            setRating(index);
        }
    };

    const constructRating = (currentRating : number): void => {
        const updatedArray = ratingArray.map((item: JSX.Element, index:number) => {
            return (
                <div className={classNames(styles.star, {
                    [styles.filled] : index < currentRating,
                    [styles.editable]: isEditable === true,
                })} onMouseEnter={() => onChangeDisplay(index+1)}
                     onMouseLeave={() => onChangeDisplay(rating)}
                     onClick={() => onSelectRating(index+1)}>
                    <StarSvg tabIndex={isEditable? 0 : -1}
                         onKeyDown={(event: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(index+1, event)}/>
                </div>
            );
        });
        setRatingArray(updatedArray);
    };

    React.useEffect(() => {
        constructRating(rating);
    }, [rating]);

    return (
        <div {...props} style={{display: 'flex'}}>
            {ratingArray.map((item : JSX.Element, index:number) => (
                <span key={index}>{item}</span>
            ))}
        </div>
    );
};