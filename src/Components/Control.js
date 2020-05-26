import React, { useState } from "react";
import Begin from "./Begin";
import Emo from "./Emo";
import Action from "./Action";
import Character from "./Character";
import Times from "./Times";
import Location from "./Location";
import Thing from "./Thing";
import Reality from "./Reality";
import Report from "./Report";
import Scription from "./Scription";
import "./Control.css";
import Discover from "./Discover";
import firebase from "../firebase";

function Control() {
  const [page, setpage] = useState(1);
  const [Emolist, setEmolist] = useState([]);
  const [Time, setTime] = useState("");
  const [ActiList, setActiList] = useState([]);
  const [CharacterList, setCharacterList] = useState([]);
  const [LocationList, setLocationList] = useState([]);
  const [ThingList, setThingList] = useState([]);
  const [RealityValue, setRealityValue] = useState("");
  const [Description, setDescription] = useState([]);
  const [fire, setfire] = useState([]);
  console.log(page);
  console.log(Emolist);

  console.log(ActiList);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("Post").get();
      setfire(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  const logData = () => {
    nextpage();
    firebase.firestore().collection("Post").add({
      emotionlist: Emolist,
      time: Time,
      actionlist: ActiList,
      characterlist: CharacterList,
      locationlist: LocationList,
      thinglist: ThingList,
      realityvalue: RealityValue,
      description: Description,
    });
  };

  const logReality = (real) => {
    setRealityValue(real);
  };

  const logTime = (tim) => {
    setTime(tim);
  };
  const nextpage = () => {
    setpage(page + 1);
  };
  const logEmo = (emo) => {
    setEmolist([...Emolist, emo]);
  };
  const emolist = () => {
    return <h1>hey</h1>;
  };

  function prevPage() {
    setpage(page - 1);
  }

  switch (page) {
    case 1:
      return <Begin start={nextpage} />;
    case 2:
      return (
        <div>
          <Emo
            smell={logEmo}
            nextpage={nextpage}
            prev={prevPage}
            add={() => {
              logEmo();
            }}
          />
          {Emolist}
        </div>
      );
    case 3:
      return (
        <div>
          <Action
            onSubmit={(text) =>
              setActiList([{ text, complete: false }, ...ActiList])
            }
            prev={prevPage}
            next={nextpage}
          />
          {ActiList.map(({ text }) => (
            <div key={text}>{text}</div>
          ))}
        </div>
      );
    case 4:
      return (
        <div>
          <Character
            next={nextpage}
            prev={prevPage}
            onSubmit={(text) =>
              setCharacterList([{ text, complete: false }, ...CharacterList])
            }
          />
          {CharacterList.map(({ text }) => (
            <div key={text}>{text}</div>
          ))}
        </div>
      );
    case 5:
      return (
        <div>
          <Times
            add={logTime}
            prev={prevPage}
            next={nextpage}
            onSubmit={(text) =>
              setCharacterList([{ text, complete: false }, ...CharacterList])
            }
          />
          {Time}
        </div>
      );
    case 6:
      return (
        <div>
          <Location
            next={nextpage}
            prev={prevPage}
            onSubmit={(text) =>
              setLocationList([{ text, complete: false }, ...LocationList])
            }
          />
          {LocationList.map(({ text }) => (
            <div key={text}>{text}</div>
          ))}
        </div>
      );
    case 7:
      return (
        <div>
          <Thing
            next={nextpage}
            prev={prevPage}
            onSubmit={(text) =>
              setThingList([{ text, complete: false }, ...ThingList])
            }
          />
          {ThingList.map(({ text }) => (
            <div key={text}>{text}</div>
          ))}
        </div>
      );
    case 8:
      return (
        <div>
          <Reality logReality={logReality} next={nextpage} prev={prevPage} />
          {RealityValue}
        </div>
      );
    case 9:
      return (
        <div>
          <Scription
            next={logData}
            prev={prevPage}
            onSubmit={(text) =>
              setDescription([{ text, complete: false }, ...Description])
            }
          />
          {Description.map(({ text }) => (
            <div key={text}>{text}</div>
          ))}
        </div>
      );
    case 10:
      return (
        <div>
          <Report
            ThingList={ThingList}
            Time={Time}
            Emolist={Emolist}
            ActiList={ActiList}
            Characters={CharacterList}
            Reality={RealityValue}
            Description={Description}
            next={nextpage}
          />
        </div>
      );
    case 11:
      return (
        <div>
          <Discover />
          {fire.map(fire=> (
            <li key={fire.text}>{fire.text}</li>
          ))}
        </div>
      );
  }

  return (
    <div>
      <h1>hey</h1>
    </div>
  );
}

export default Control;
