import React from "react";

const Typewriter = ({
  text,
  delay,
  ...props
}: {
  text: string;
  delay: number;
} & React.HTMLAttributes<HTMLSpanElement>) => {
  const [currentText, setCurrentText] = React.useState(text.slice(0, 5));
  const [currentIndex, setCurrentIndex] = React.useState(5);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text]);

  return <span {...props}>{currentText}</span>;
};

export default Typewriter;
