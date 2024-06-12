import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { endpoint } from "../../../utils/endpoint";
import CardSkeleton from "./skeleton/CardSkeleton";
import { convertDatetime } from "../../../utils/convertDatetime";

const ListCard = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [end, setEnd] = useState(false);

  const handleScroll = () => {
    if (end) return;
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${endpoint}/get-explore?page=${page}&limit=4`
      );
      if (res.data.results.next === undefined) {
        setEnd(true);
      }
      setData((prev) => [...prev, ...res.data.results.results]);
    };
    fetchData();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return (
    <div className="grid grid-cols-1 2xl:grid-cols-4 md:grid-cols-3 md:gap-[30px] gap-5">
      {data.length > 0
        ? data.map((item) => (
            <Card
              key={item._id}
              link={`/explore/${item._id}`}
              img={item.images}
              title={item.title}
              desc={item.description}
              datetime={convertDatetime(item.createdAt)}
            ></Card>
          ))
        : Array(6)
            .fill(0)
            .map((item, index) => <CardSkeleton key={index}></CardSkeleton>)}
    </div>
  );
};

export default ListCard;
