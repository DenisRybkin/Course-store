import React, {useContext} from 'react';
import styles from './Menu.module.scss';
import classNames from "classnames";
import {AppContext} from "../../context/app.context";
import {firstLevelMenuItems, PageItem} from "../../interfaces/menu.interface";
import CoursesIcon from './icons/courses.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import ServicesIcon from './icons/services.svg';
import {TopLevelCategory} from "../../interfaces/page.interface";

const firstLevelMenu : firstLevelMenuItems[] = [
    {
        route : 'courses',
        name : 'Курсы',
        icon : <CoursesIcon/>,
        id : TopLevelCategory.Courses
    },
    {
        route : 'services',
        name : 'Сервисы',
        icon : <ServicesIcon/>,
        id : TopLevelCategory.Services
    },
    {
        route : 'books',
        name : 'Книги',
        icon : <BooksIcon/>,
        id : TopLevelCategory.Books
    },
    {
        route : 'products',
        name : 'Товары',
        icon : <ProductsIcon/>,
        id : TopLevelCategory.Books
    },

];

export const Menu = (): JSX.Element => {
    const {menu,setMenu,firstCategory} = useContext(AppContext);

    const buildFirstLevel = () => {
        return (
            firstLevelMenu.map((m) => (
                <div key={m.route}>
                    <a href={`/${m.route}`}>
                        <div className={classNames(styles.firstLevel, {
                            [styles.firstLevelActive] : m.id === firstCategory,
                        })}>
                            {m.icon}
                            <span>{m.name}</span>
                        </div>
                    </a>
                    {m.id === firstCategory && buildSecondLevel(m)}
                </div>
            ))
        );
    };
    const buildSecondLevel = (menuItem: firstLevelMenuItems) => {
        return (
            <div className={styles.secondBlock}>
                {menu && menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                        <div className={classNames(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpen]: m.isOpened
                        })}>
                            {buildThirdLevel(m.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        );
    };
    const buildThirdLevel = (pages: PageItem[], route : string) => {
        return (
            pages.map(p => (
                <a href={`/${route}/${p.alias}`} className={classNames(styles.thirdLevel ,{
                    [styles.thirdLevelActive] : false,
                })}>
                    {p.category}
                </a>
            ))
        );
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
};