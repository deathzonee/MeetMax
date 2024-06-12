import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { endpoint } from "../../utils/endpoint";
import styled from "styled-components";
import PathLevel2 from "./part/PathLevel2";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SubmitComment from "./part/SubmitComment";
import InfoDetails from "./part/InfoDetails";
import DetailSkeleton from "./part/skeleton/DetailSkeleton";

const ExploreDetailStyled = styled.div`
  .info-explore {
    &::after {
      content: "";
      position: absolute;
      width: 1px;
      height: 100%;
      left: 0;
      background-color: #4e5d78;
      @media (max-width: 46.1875em) {
        width: 100%;
        height: 1px;
        right: 0;
      }
    }
    ul li {
      display: flex;
      gap: 12px;
      align-items: center;
      p {
        font-size: 14px;
        line-height: 22px;
        font-weight: 400;
      }
    }
  }
`;

const ExploreDetailPage = () => {
  const param = useParams();
  const { id } = param;
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await axios.get(
          `${endpoint}/details-explore?detailID=${id}`
        );
        setData(res.data.result);
      } catch (error) {
        toast.error(`${error.response.data.message}`);
        navigate("/notfound");
      }
    };
    getDetail();
  }, []);

  return (
    <ExploreDetailStyled className="md:min-h-screen min-h-[90vh] bg-darkColors2 md:p-[30px] py-2 md:rounded-[10px]">
      <div className="bg-darkColors1 md:p-[30px] md:pb-0 py-[10px] px-5 md:rounded-lg flex flex-col md:gap-[30px] gap-4 h-full">
        <PathLevel2 title1="Explore" title2="Details" to1="/explore" />
        {data ? (
          <div className="flex flex-col md:flex-row">
            <div className="w-full flex-1 md:mr-[30px]">
              <LazyLoadImage
                effect="blur"
                src={data?.images}
                alt="Image blog"
                width={"100%"}
                className="max-h-[275px] 2xl:h-[320px] w-full object-cover rounded-lg mb-2"
              />
              <span className="flex flex-col gap-5">
                <h2 className="text-base font-medium text-white text-opacity-90">
                  {data?.title}
                </h2>
                <h4
                  style={{ wordWrap: "break-word", whiteSpace: "break-spaces" }}
                  className="pb-5 font-normal text-white text-bodyBold text-opacity-40"
                >
                  {data?.description}
                </h4>
              </span>
              <SubmitComment />
            </div>
            <InfoDetails
              category={data?.category}
              location={data?.location}
              author={data?.author?.username}
              datetime={data?.createdAt}
            />
          </div>
        ) : (
          <DetailSkeleton></DetailSkeleton>
        )}
      </div>
    </ExploreDetailStyled>
  );
};

export default ExploreDetailPage;
