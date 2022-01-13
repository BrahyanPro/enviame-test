/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

/* --------------------------- Image Dependencies --------------------------- */
import { Close, Editar } from '../icons';

/* ------------------------- SideBarModal propTypes ------------------------ */
const propTypes = {
  show: PropTypes.bool,
  closeShow: PropTypes.func,
  size: PropTypes.string,
  overlayColor: PropTypes.string,
  css: PropTypes.object,
  data: PropTypes.object,
};

/* ------------------------ SideBarModal defaultprops ----------------------- */
const defaultProps = {
  show: false,
  closeShow: () => {},
  size: 'md',
  overlayColor: 'rgba(0, 0, 0, 0.8)',
  css: {},
};

function SideBarModal({
  show,
  closeShow,
  size,
  overlayColor,
  css: styling,
  data,
  name,
  descripcion,
  edit,
  setName,
  setDescripcion,
  setEdit,
}) {
  const fecha = data.modified
    .split('T')[0]
    .replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1');

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Escape') {
      closeShow();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleEdit = () => {
    setEdit(!edit);
  };
  return (
    <>
      {show && (
        <>
          <div className="bodyA">
            <div
              className="wrapper"
              size={size}
              css={styling}
              data-testid="sidebarmodal"
            >
              <div
                overlaycolor={overlayColor}
                className="overlay"
                onClick={() => closeShow()}
              />
              <aside className="fadeInLeft">
                <div className="pos__relative">
                  <div className="d-flex justify-content-between header">
                    <button
                      onClick={() => closeShow()}
                      className="none-button"
                      type="button"
                    >
                      <Close />
                    </button>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        closeShow();
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Back To Characters.
                    </a>
                  </div>

                  <div className="main__post">
                    {edit ? (
                      <input
                        type="text"
                        className="form__field"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    ) : (
                      <h3 className="mt-4">{name}</h3>
                    )}
                    {/* <p className="te mb-4">{data.description}</p> */}
                    <img
                      src={`${data.thumbnail.path}/standard_fantastic.jpg`}
                      alt={data.name}
                    />
                    <h4>Description</h4>
                    {edit ? (
                      <input
                        type="text"
                        className="form__field d"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                      />
                    ) : (
                      <p>
                        {descripcion === ''
                          ? setDescripcion(
                              'Puedes creer que no haya descripcion de un personaje tan genial? Aún no le ha llegado, Deberian usar enviame 😉'
                            )
                          : descripcion}
                      </p>
                    )}
                    <h4>Ultima Modificacion</h4>

                    <p className="d-flex flex-wrap">
                      <span className="d-block mb-1">{fecha}</span>
                    </p>

                    <h4>
                      <Editar />
                      Hecho con el ♥ para Enviame &copy;
                    </h4>
                    <p>
                      <a
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.link}
                      </a>
                    </p>
                  </div>
                  <a
                    className="open__project"
                    target="_blank"
                    id="cardHover"
                    onClick={handleEdit}
                    rel="noopener noreferrer"
                  >
                    {edit ? 'Guardar' : 'Editar Nombre y Descripcion'}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
                    </svg>
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </>
      )}
    </>
  );
}

SideBarModal.propTypes = propTypes;
SideBarModal.defaultProps = defaultProps;

export default SideBarModal;
