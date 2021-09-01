import React from "react";
import {CustomTitle, Button, CustomParagraph, Tag, Rating} from "../components/inedex";
import { withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";

function Home({menu}: HomeProps): JSX.Element {

    const [rating, setRating] = React.useState<number>(1);
    return (
    <>
        <CustomTitle tag='h1'>text h1</CustomTitle>
        <Button appearance="primary" arrow='down'>button test</Button>
        <Button appearance="ghost" arrow='right'>button test</Button>
        <CustomParagraph fontSize='18'>С какими бы неприятностями ни сталкивался Колян, он всегда может рассчитывать на своих ближайших друзей. Те, несмотря на свою поразительную неуклюжесть, без продолжительных раздумий бросятся спасать героя. Они не станут размышлять о возможных последствиях, поскольку дружба значит для них намного больше, чем возможные будущие проблемы. Словом, Колян может не переживать о том, что однажды ему придётся остаться наедине с сложностями, ведь рядом с ним обязательно будут находиться надёжные товарищи, которые не дадут ему остаться без поддержки. Единственное, чего стоит опасаться герою, так это</CustomParagraph>
        <Tag size={'m'} color={'green'} href="/" > Link </Tag>
        <Tag size={'s'} color={'red'} href="/" > Link </Tag>
        <Tag size={'m'} color={'primary'} href="/" > Link </Tag>
        <Tag size={'s'} color={'ghost'} href="/" > Link </Tag>
        <Rating rating={rating} isEditable={true} setRating={setRating}/>
        <ul>
            {menu.map((m,index) => (<li key={index}>{m._id.secondCategory}</li>))}
        </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps : GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const {data : menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props : {
            menu,
            firstCategory
        }
    };
};
interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}