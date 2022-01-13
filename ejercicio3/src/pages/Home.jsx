import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { PageWrapper } from '../common/Layout';
import { MansoryItem } from '../common/MansoryItem';
import Buscador from '../common/Tabs';
import Cursor from '../common/Cursor';

let arrayRandomItem = (array) => {
  return array[(Math.random() * array.length) | 0];
};

let TOTAL_PAGES = 2626; //Total de personajes en la api, como esa info estaba disponible decidi ahorrar recursos y efuerzos.

let alturas = ['400px', '454px', '310px'];

const apikey = '6ac743f183f919b6880c013e82a88782';

function Home() {
  const [loading, setLoading] = useState(true);
  const [datos, setdatos] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [lastElement, setLastElement] = useState(null);
  const [data, setData] = useState([]);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPageNum((no) => no + 20);
      }
    })
  );

  const callUser = async () => {
    setLoading(true);
    let response = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=${apikey}&offset=${pageNum}`
    );
    let all = new Set([...datos, ...response.data.data.results]);
    setdatos([...all]);
    setLoading(false);
  };

  useEffect(async () => {
    if (pageNum <= TOTAL_PAGES) {
      callUser();
    }
  }, [pageNum]);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  return (
    <main className="Main" title="Home">
      <Cursor />
      <div className="BackLay">
        <h1 aria-hidden="true">
          <a>Home</a>
        </h1>
      </div>
      <div className="PageSection">
        <PageWrapper>
          <h1 className="intro__text">Home</h1>

          <Buscador setData={setData} />

          <div className="TabItems" label="All">
            <MansoryLayout>
              {data.length > 0
                ? data.map((item, index) => {
                    let altura = arrayRandomItem(alturas);
                    return (
                      <div key={index} ref={setLastElement}>
                        <MansoryItem
                          index={index}
                          item={item}
                          altura={altura}
                        />
                      </div>
                    );
                  })
                : datos.map((item, index) => {
                    let altura = arrayRandomItem(alturas);
                    return (
                      <div key={index} ref={setLastElement}>
                        <MansoryItem
                          index={index}
                          item={item}
                          altura={altura}
                        />
                      </div>
                    );
                  })}
            </MansoryLayout>
          </div>
          {loading && <p className="text-center">loading...</p>}
          {pageNum - 1 === TOTAL_PAGES && (
            <p className="text-center my-10">
              Hecho con el ♥ para Enviame &copy;
            </p>
          )}
        </PageWrapper>
      </div>
    </main>
  );
}

export default Home;

const MansoryLayout = ({ children }) => {
  return <div className="Layout">{children}</div>;
};
