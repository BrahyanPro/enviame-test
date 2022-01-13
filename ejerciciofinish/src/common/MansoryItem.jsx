import React, { useState } from 'react';

import Image from './Image';
import SideBarModal from './SideBarModal';

export function MansoryItem({
  item,
  altura,
  name,
  descripcion,
  setName,
  setDescripcion,
}) {
  const [show, setShow] = useState(false);

  const fecha = item.modified
    .split('T')[0]
    .replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1');

  return (
    <>
      <div
        className="MansoryItemStyle"
        {...{ item }}
        style={{
          height: altura,
        }}
        role="gridcell"
        id="cardHover"
        aria-label={`${name} ${descripcion}`}
        onClick={() => setShow(true)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') return setShow(true);
        }}
        tabIndex="0"
      >
        <Image src={`${item.thumbnail.path}/portrait_uncanny.jpg`} alt={name} />
        <div className="content__slate">
          <h3>{item.name}</h3>
          <p>
            {item.description === ''
              ? 'Puedes creer que no haya descripcion de un heroe tan genial? Aún no le ha llegado, Deberian usar enviame 😉'
              : item.description}
          </p>

          <p className="d-flex flex-wrap">
            <span className="d-block mb-1">{fecha && fecha}</span>
          </p>
        </div>
      </div>

      <SideBarModal
        show={show}
        closeShow={() => setShow(false)}
        size="lg"
        data={item}
        name={name}
        descripcion={descripcion}
      />
    </>
  );
}
