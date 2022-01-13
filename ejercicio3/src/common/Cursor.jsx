/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useRef, useEffect, useCallback } from 'react';

/* -------------------------------------------------------------------------- */
/*                            Estilos                                         */
/* -------------------------------------------------------------------------- */

import '../styles/common/Cursor.css' 


function Cursor() {
  const cursor = useRef(null);
  const mouseMove = useCallback(
    (e) => {
      const elements = document.querySelectorAll('#cardHover');
      if (cursor.current) {
        cursor.current.setAttribute(
          'style',
          `top: ${e.pageY - 10}px; left: ${
            e.pageX - 10
          }px; visibility: visible;`
        );
      }
      for (let i = 0; i < elements.length; i++) {
        elements[i].mouseIsOver = false;
        elements[i].onmouseover = () => {
          cursor.current.classList.add('hovered');
        };
        elements[i].onmouseout = () => {
          cursor.current.classList.remove('hovered');
        };
      }
    },
    [cursor.current]
  );

  const click = useCallback(() => {
    if (cursor.current) cursor.current.classList.add('expand');

    setTimeout(() => {
      if (cursor.current) return cursor.current.classList.remove('expand');
    }, 500);
  }, [cursor.current]);

  useEffect(() => {
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('click', click);
    return () => {
      document.removeEventListener('click', click);
      document.removeEventListener('mousemove', mouseMove);
    };
  }, [click, mouseMove]);

  return (
    <div className="CursorThumb">
      <div className="cursor d-none d-md-inline" ref={cursor} />
    </div>
  );
}

export default Cursor;
