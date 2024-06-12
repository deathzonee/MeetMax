import { useForm } from "react-hook-form";
import Button from "../../../components/button/Button";
import { LinkFileIcon, SendIcon, SmileIcon } from "../../../components/icons";
import Input from "../../../components/input/Input";

const FormSendMessage = () => {
  const { control } = useForm();
  return (
    <form className="chat-message w-full absolute bottom-[20px] !pr-[20px] flex items-center gap-[20px]">
      <div className="relative flex-grow">
        <Input
          id="chat"
          name="chat"
          control={control}
          placeholder="Type something here..."
          className="!px-[20px] !py-[17px] text-bodyBold font-normal rounded-[10px] border border-[#4E5D78]"
        ></Input>
        <div className="absolute right-[20px] bottom-1/2 translate-y-1/2 flex item-center gap-[14px]">
          <LinkFileIcon></LinkFileIcon>
          <SmileIcon></SmileIcon>
        </div>
      </div>

      <Button className="flex items-center justify-center !w-[56px] !h-[56px] bg-darkColors2 !p-[15px] !rounded-[5px]">
        <SendIcon></SendIcon>
      </Button>
    </form>
  );
};

export default FormSendMessage;
