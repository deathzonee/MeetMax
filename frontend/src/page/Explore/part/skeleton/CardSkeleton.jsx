import LoadingSkeleton from "../../../../components/loader/LoadingSkeleton";

const CardSkeleton = () => {
  const classNames = "rounded-lg";
  return (
    <div className="bg-darkColors1 rounded-lg overflow-hidden md:max-w-[350px]">
      <LoadingSkeleton height="200px"></LoadingSkeleton>
      <div className="flex flex-col gap-[18px] p-[18px]">
        <div className="flex gap-[14px]">
          <LoadingSkeleton
            height="22px"
            width="75px"
            className={classNames}
          ></LoadingSkeleton>
          <span className="text-bodyBold text-white text-opacity-40 font-medium">
            <LoadingSkeleton
              height="22px"
              width="105px"
              className={classNames}
            ></LoadingSkeleton>
          </span>
        </div>
        <div className="flex flex-col gap-[14px]">
          <h2 className="text-heading3Bold font-bold text-white">
            <LoadingSkeleton
              height="56px"
              className={classNames}
            ></LoadingSkeleton>
          </h2>
          <div className="text-bodyBold font-normal text-white text-opacity-40">
            <LoadingSkeleton
              height="40px"
              className={classNames}
            ></LoadingSkeleton>
          </div>
        </div>
        <div className="uppercase text-blueColors flex gap-[14px] items-center">
          <span className="font-medium text-bodyBold">
            <LoadingSkeleton
              height="22px"
              width="80px"
              className={classNames}
            ></LoadingSkeleton>
          </span>
          <LoadingSkeleton
            height="22px"
            width="24px"
            className={classNames}
          ></LoadingSkeleton>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
