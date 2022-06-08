import { Typography } from "@mui/material";

const articles = [
    { link: "https://flatlandkc.org/news-issues/the-kc-homeless-union-met-with-mayor-q-for-four-days-straight-heres-what-they-agreed-on/", title: "The KC Homeless Union met with Mayor Q for Four Days Straight. Here’s What They Agreed on.", year: 2021, author: "Celisa Calacal", publication: "The Beacon"},
    { link: "https://www.kshb.com/news/local-news/group-forms-kc-homeless-union-to-make-sure-they-have-a-seat-at-the-table", title: "Group forms KC homeless union to make sure they have a seat at the table", year: 2021, author: "Sarah Plake", publication: "KSHB"},
    { link: "https://gkcceh.org/kansas_city_homeless_union_update/", title: "Why the Kansas City Homeless Union Demands a Seat at the Table", author: "GKCCEH", year: 2021, publication: "Greater Kansas City Coalition to End Homelessness"},
    { link: "https://www.kansascity.com/news/local/article254129023.html", title: " Kansas City’s homeless union has solutions for the city. Here is what they want.", author: "Anna Spoerre", year: 2021, publication: "The Kansas City Star"}
];

const articleReference = ({link, author, year, title, publication}: { link: string, author: string, year: number, title: string, publication: string}, index: number) =>
    <li key={index}><a href={link}>{author} ({year}) {title} <em>{publication}</em></a></li>

const News = () => {

    return (
        <div style={{ textAlign: "left" }}>
            <Typography variant="h4" component="h2" style={{ marginBottom: 25 }}>
                Union News
            </Typography>
            <ul>
                {
                    articles.map(articleReference)
                }
            </ul>
        </div>
    );
};

export default News;
