import { useState } from 'react';

// DATA //
import data from '../../data';

// COMPONENTS //
import Modal from '../global/Modal';

// STYLES //
import './Works.scss';

const Works = () => {
  const [dataSet, setDataSet] = useState('');
  const [open, setOpen] = useState(false);

  const onClickHandler = (e) => {
    setDataSet(e.target.dataset.item);
    setOpen(!open);
  };

  return (
    <section id="works" className="works">
      <div className="container">
        <div className="grid">
          <div className="section-title" data-num="03">
            <h2 className="section-title__description">Recent Works</h2>
          </div>
          <h3 className="main-title">
            Here are some of our projects we have done lately. Feel free to check them
            out.
          </h3>
        </div>

        <div className="grid">
          {data.works.items.map((item) => (
            <div className="works__item" key={item.no}>
              <img src={item.image} alt="works item img" width="768" height="465" />
              <div
                className="overlay"
                data-item={item.no}
                onClick={(e) => onClickHandler(e)}
              ></div>
              <div className="works__item-intro">
                <p className="type">{item.type}</p>
                <p className="name">{item.name}</p>
              </div>
              <a
                href={item.preview}
                target="_blank"
                rel="noopener"
                className="works__item-preview"
              >
                Preview
              </a>
            </div>
          ))}
        </div>
      </div>
      <Modal items={data.works.items} dataSet={dataSet} open={open} setOpen={setOpen} />
    </section>
  );
};

export default Works;
