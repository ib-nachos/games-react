import React, { useRef, useEffect, useCallback, useContext } from "react";
import "./Modal.css";
import { GameContext } from "../GameCard/GameCard";

const Modal = ({ isOpen, close }) => {
  const refOuter = useRef(null);
  const refFirstFocusable = useRef(null);
  const refLastFocusable = useRef(null);

  useEffect(() => {
    const focusableElements =
      refOuter.current?.querySelectorAll("[tabindex]") ?? [];

    refFirstFocusable.current = focusableElements[0];
    refLastFocusable.current = focusableElements[focusableElements.length - 1];

    refFirstFocusable.current?.focus();
  }, [close]);

  const onKeyDown = useCallback(
    (e) => {
      // if tab key is tapped on the last
      // focus on the first
      // Warning! need to check e.current if a child of lastFocusable

      if (
        document.activeElement === refLastFocusable.current &&
        e.key === "Tab" &&
        !e.shiftKey
      ) {
        e.preventDefault();
        refFirstFocusable.current?.focus();
      }
      if (
        document.activeElement === refFirstFocusable.current &&
        e.key === "Tab" &&
        e.shiftKey
      ) {
        e.preventDefault();
        refLastFocusable.current?.focus();
      }

      if (e.key === "Escape") {
        close();
      }
    },
    [close]
  );

  const { title, description } = useContext(GameContext);

  return (
    <>
      {isOpen ? (
        <div className="backdrop" ref={refOuter} onKeyDown={onKeyDown}>
          <div onClick={close} className="backdrop-close"></div>
          <div className="modal">
            <button onClick={close} tabIndex={0}>
              X
            </button>
            <h1>{title}</h1>
            <p>{description}</p>
            <button tabIndex={0}>Buy</button>
            <button tabIndex={0}>Cancel</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
