import React from "react";
import { useParams } from "react-router-dom";
import { DictionaryObject } from "../../../common/types";
import { Api } from "../../../services/Api";
import { useAppDispatch } from "../../../state/hooks";
import { addHistory } from "../../../state/slices/historySlice";

export default function QueryPage() {
  const { q } = useParams<{ q: string }>() as { q: string };
  const dispatch = useAppDispatch();

  const [websters, setWebsters] = React.useState<DictionaryObject[]>();

  const api = new Api();

  React.useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    (async () => {
      try {
        const response = await api.getWord(q);
        setWebsters(response);
      } catch (error) {}
    })();

    return () => {
      dispatch(addHistory(q));
    };
  }, [q]);

  return (
    <div className="p-4 lg:px-12">
      {websters?.map((e, i) => (
        <p>{e.word}</p>
      ))}
    </div>
  );
}
