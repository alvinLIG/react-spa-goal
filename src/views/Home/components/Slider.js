import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import useSlider from '../../../hooks/useSlider';
import noimage from '../../../assets/images/noimage.jpg';
import { ReactComponent as IconArrow } from '../../../assets/images/arrow.svg';

const Slider = () => {
  const posts = useSlider();
  const [slider, setSlider] = useState([]);
  const [loading, setLoading] = useState(true);

  const max = 3;
  const [active, setActive] = useState(0);

  const nextSlide = () => active < max - 1 && setActive(active + 1);
  const prevSlide = () => active > 0 && setActive(active - 1);
  const isActive = (value) => active === value && 'is-active';

  const setSliderStyle = () => {
    const transition = active * -100;

    return {
      width: (max * 100) + 'vw',
      transform: 'translateX(' + transition + 'vw)'
    }
  }

  useEffect(() => {
    if (posts && posts.slider) {
      setSlider(posts.slider);
    }

    if (posts) {
      setLoading(posts.loading);
    }
  }, [posts]);

  return (
    <div className="slider">
      {!loading
        ? (
          <Fragment>
            <ul className="slider-inner" style={setSliderStyle()}>
            {
              slider.map((post, index) => (
                <li className="slider-item" key={index}>
                  <Link to={`/post/${post.id}`}>
                    <div className="slider-image" style={{backgroundImage: `url(${(post.image != null && post.image !== "") ? post.image : noimage})`}}></div>

                    <div className="l-container">
                      <div className="slider-content">
                        <h2 className="slider-heading"><span>{post.title}</span></h2>
                        {post.createdAt ?
                          <time className="slider-date" dateTime={moment(post.createdAt).format('YYYY-MM-DD')}>{moment(post.createdAt).format('YYYY.MM.DD')}</time>
                          : null
                        }
                      </div>
                    </div>
                  </Link>
                </li>
              ))
            }
          </ul>

          <ul className="slider-dots">
            {
              slider.map((post, index) => (
                <li className={'slider-dots-item ' + isActive(index)} key={index}>
                  <button className="slider-dots-button" onClick={() => setActive(index)}></button>
                </li>
              ))
            }
          </ul>

          <button
            className='slider-arrow slider-arrow-prev'
            onClick={prevSlide}
          >
            <IconArrow style={{transform: 'scale(-1)'}} />
          </button>

          <button
            className='slider-arrow slider-arrow-next'
            onClick={nextSlide}
          >
            <IconArrow />
          </button>
        </Fragment>
        )
        : <div>Loading</div>
      }
    </div>
  );
}

export default Slider;
