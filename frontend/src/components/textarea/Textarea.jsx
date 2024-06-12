import propTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
const TextareaStyled = styled.textarea`
  width: 100%;
  background-color: #212833;
  border-radius: 10px;
  border: 1px solid #4e5d78;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  resize: none;
  overflow: hidden;
`;
const Textarea = ({
  className,
  placeholder,
  name,
  onClick = () => {},
  value,
  setValue,
}) => {
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const handleChange = (event) => {
    setTextareaHeight("auto");
    setValue(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setValue((prev) => prev + "\n");
    }
  };

  useLayoutEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [value]);
  return (
    <div>
      <TextareaStyled
        name={name}
        className={`${className}`}
        placeholder={placeholder}
        value={value}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        onClick={onClick}
      ></TextareaStyled>
    </div>
  );
};

export default Textarea;

Textarea.propTypes = {
  name: propTypes.string,
  className: propTypes.string,
  ref: propTypes.string,
  placeholder: propTypes.string,
  style: propTypes.string,
  value: propTypes.string,
  setValue: propTypes.func,
  onClick: propTypes.func,
};
