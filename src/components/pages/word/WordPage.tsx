import React from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../state/hooks";
import { Api } from "../../../services/Api";
import { DictionaryObject } from "../../../common/types";

export default function WordPage() {
  const { q } = useParams<{ q: string }>() as { q: string };

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
  }, [q]);

  return (
    <React.Fragment>
      {websters?.map((e, i) => (
        <Webster key={i} webster={e} />
      ))}
    </React.Fragment>
  );
}

function Webster({ webster }: { webster: DictionaryObject }) {
  return (
    <React.Fragment>
      <p className="font-bold">{webster.word}</p>
      <div>
        {webster.meanings.map((e, i) => (
          <div key={i}>
            <p>{e.partOfSpeech}</p>
            {e.definitions.map((d, i) => (
              <p key={i} className="mb-1 text-sm">
                {d.definition}
              </p>
            ))}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
