import LoadingSkeleton from "../../../../components/loader/LoadingSkeleton";

const DetailSkeleton = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <div className="w-full flex-1 md:mr-[30px]">
        <LoadingSkeleton className="w-full md:h-[275px] h-[200px] 2xl:h-[320px] rounded-lg mb-2" />
        <span className="flex flex-col md:gap-5 gap-4">
          <h2>
            <LoadingSkeleton className="md:h-8 h-5 rounded-lg" width="50%" />
          </h2>
          <h4 className="pb-5">
            <LoadingSkeleton className="md:h-10 h-7 rounded-lg" width="75%" />
          </h4>
        </span>
        <div className="flex items-center gap-[18px] md:mt-10 pb-[30px]">
          <LoadingSkeleton className="md:!w-10 md:h-10 !w-7 h-7 rounded-full shrink-0" />
          <LoadingSkeleton className="md:h-10 h-7" radius="6px" />
          <LoadingSkeleton className="md:h-10 h-7" radius="6px" width="30%" />
        </div>
      </div>
      <div className="info-explore md:w-[260px] 2xl:w-[360px] md:flex flex-col gap-[20px] pl-[30px] relative hidden">
        <span>
          <LoadingSkeleton className="h-6 w-[30%] rounded-md" />
        </span>
        <span className="">
          <LoadingSkeleton height="18px" width="30%" radius="4px" />
        </span>
        <ul className="flex flex-col gap-[14px]">
          <li>
            <LoadingSkeleton height="22px" radius="6px" />
          </li>
          <li>
            <LoadingSkeleton height="22px" radius="6px" />
          </li>
          <li>
            <LoadingSkeleton height="22px" radius="6px" />
          </li>
        </ul>
        <div className="flex gap-5 h-10">
          <LoadingSkeleton radius="8px" />
          <LoadingSkeleton width="20%" radius="8px" />
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
