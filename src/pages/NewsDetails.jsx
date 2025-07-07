import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RighAside from "../components/homelayout/RighAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const newsData = useLoaderData();
  const [news, setNews] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const detailNews = newsData.find((singleNews) => singleNews.id == id);
    setNews(detailNews)
  }, [newsData, id]);

  return (
    <div>
      <header className="my-5">
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h1 className="font-bold mb-3">Dragon News</h1>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RighAside></RighAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
