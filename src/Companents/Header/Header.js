import React from 'react';
import $ from 'jquery';
// import Slider from 'react-slick';
import icons from '../../images/sprites/spriteMy.svg';


const Header = () => {
    return (
      <header className='header'>
        <div className='header__slider'>
            <div className='eader__slider-item slider-item'>
                <div className='slider-item__info'>
                    <div className='slider-item__info-suptitle suptitle-left'>Surf</div>
                    <div className='slider-item__info-title'>North Shore</div>
                    <div className='slider-item__info-supttext suptitle-left'>Condition</div>
                    <div className='slider-item__info-text'>Condition</div>
                    <a className='slider-item__info-link' href="#">
                        <svg>
                            <use href={`${icons}#arrowsRight`}></use>
                        </svg>
                    </a>
                </div>
            </div>
            <div className='eader__slider-item slider-item'>
                <div className='slider-item__info'>
                    <div className='slider-item__info-suptitle suptitle-left'>Surf</div>
                    <div className='slider-item__info-title'>South Shore</div>
                    <div className='slider-item__info-supttext suptitle-left'>Condition</div>
                    <div className='slider-item__info-text'>Condition</div>
                    <a className='slider-item__info-link' href="#">
                        <svg>
                            <use href={`${icons}#arrowsRight`}></use>
                        </svg>
                    </a>
                </div>
            </div>
            <div className='eader__slider-item slider-item'>
                <div className='slider-item__info'>
                    <div className='slider-item__info-suptitle suptitle-left'>Surf</div>
                    <div className='slider-item__info-title'>West Shore</div>
                    <div className='slider-item__info-supttext suptitle-left'>Condition</div>
                    <div className='slider-item__info-text'>Condition</div>
                    <a className='slider-item__info-link' href="#">
                        <svg>
                            <use href={`${icons}#arrowsRight`}></use>
                        </svg>
                    </a>
                </div>
            </div>
            <div className='eader__slider-item slider-item'>
                <div className='slider-item__info'>
                    <div className='slider-item__info-suptitle suptitle-left'>Surf</div>
                    <div className='slider-item__info-title'>East Shore</div>
                    <div className='slider-item__info-supttext suptitle-left'>Condition</div>
                    <div className='slider-item__info-text'>Condition</div>
                    <a className='slider-item__info-link' href="#">
                        <svg>
                            <use href={`${icons}#arrowsRight`}></use>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
      </header>
    );
};

export default Header;