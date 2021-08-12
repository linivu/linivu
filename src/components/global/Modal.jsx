// STYLES //
import './Modal.scss';

const Modal = ({ items, dataSet, open, setOpen }) => {
  const item = items.filter((item) => item.no == Number(dataSet));

  return (
    <div className={`modal ${open ? 'open' : ''}`}>
      <span>{`${dataSet} / ${items.length}`}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="close"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => setOpen(false)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      {item.map((el) => (
        <div className="modal__content" key={el.no}>
          <img src={el.image} alt={el.name} />
          <h2>{el.name}</h2>
          <p>{el.caption}</p>
          <a
            href={el.preview}
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
          >
            PREVIEW
          </a>
        </div>
      ))}
    </div>
  );
};

export default Modal;
