import _ from "lodash";
import React from "react";
import { SuggestionsObject } from "../../../common/types";
import { Api } from "../../../services/Api";
import { useNavigate } from "react-router-dom";
import { MdOutlineClear } from "react-icons/md";

export default function NavBar() {
  const navigate = useNavigate();

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const [q, setQ] = React.useState<string>("");
  const [results, setResults] = React.useState<SuggestionsObject[]>([]);

  const api = new Api();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setQ(event.target.value);
    debounceSearch(event);
  };

  const search: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
    if (event.target.value && event.target.value.length > 0)
      try {
        const response = await api.getSuggestions(event.target.value);
        setResults(response);
      } catch (error) {}
    else setResults([]);
  };

  const debounceSearch = _.debounce(search, 750);

  const clear = () => {
    setQ("");
    setResults([]);
  };

  const handleKeyPress = React.useCallback((event: KeyboardEvent) => {
    if (event.ctrlKey && event.shiftKey && event.key === "F")
      inputRef.current?.focus();
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <nav className="px-4 py-2 lg:px-8 lg:py-4 w-full h-max sticky top-0 border-b flex gap-4 items-center bg-white bg-opacity-50 backdrop-blur-lg">
      <h1
        onClick={() => navigate("/")}
        className="font-ghost text-xl cursor-pointer hidden lg:block"
      >
        ghostwriter
      </h1>
      <h1
        onClick={() => navigate("/")}
        className="font-ghost text-3xl cursor-pointer block lg:hidden align-top"
      >
        g
      </h1>

      <div className="static lg:relative border rounded flex items-center px-2 ml-auto grow lg:grow-0 lg:w-96">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search a word or phrase..."
          spellCheck="false"
          value={q}
          onChange={handleChange}
          className="px-2 py-2 outline-none flex-1 truncate"
        />
        {q && q !== "" ? (
          <MdOutlineClear
            size={20}
            className="text-slate-400 cursor-pointer"
            onClick={clear}
          />
        ) : (
          <p className="text-xs p-1 border rounded hidden lg:block">
            CTRL+SHIFT+F
          </p>
        )}

        {q && q !== "" && results.length > 0 ? (
          <div className="border-y lg:border absolute left-0 top-[58px] lg:top-12 bg-white lg:rounded w-full">
            {results.map((e, i) => (
              <p
                key={i}
                tabIndex={0}
                onClick={() => {
                  navigate(`/word/${e.word}`);
                  clear();
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    navigate(`/word/${e.word}`);
                    clear();
                  }
                }}
                className="hover:bg-slate-100 focus:bg-slate-100 cursor-pointer px-2 outline-none"
              >
                {e.word}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}
