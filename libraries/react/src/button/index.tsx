import { forwardRef, ComponentProps, ElementRef } from 'react';
import { css } from '@samhwang/bg3-styled-system/css';
import { SystemStyleObject } from '@samhwang/bg3-styled-system/types';
// import borderSvg from '../baldurs-gate-3-border.svg';
import borderInvertedSvg from '../baldurs-gate-3-border-inverted.svg';

type ButtonProps = ComponentProps<'button'> & {
  css?: false | null | SystemStyleObject;
};

function ButtonBackground() {
  return (
    <span
      className={css({
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        clipPath: 'polygon(12px 0, calc(100% - 12px) 0%, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0% calc(100% - 12px), 0% 12px)',
        bgColor: 'saddlebrown',
        backgroundImage:
          'radial-gradient(transparent, rgba(0, 0, 0, 0.8)), linear-gradient(to bottom, #af6a65, calc(12.5% - 1px), #cfa381, #88312b calc(12.5% + 1px) 50%, #601d2c 50% calc(87.5% - 1px), #994021, #341227 calc(87.5% + 1px))',
        transitionProperty: 'filter',
        transitionDuration: '.2s',
        willChange: 'filter',
      })}
    />
  );
}
ButtonBackground.displayName = 'BG3ButtonBackground';

function ButtonBorder() {
  return (
    <span
      className={css({
        position: 'absolute',
        zIndex: -2,
        inset: '-4px -12px',
        borderWidth: '15px 23px',
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderImageSource: borderInvertedSvg,
        borderImageSlice: '15 23',
        borderImageWidth: '15px 23px',
        borderImageRepeat: 'repeat',
        backgroundImage: 'linear-gradient(#000, #000), linear-gradient(to bottom, #bb9d7a 50%, #806d56 50%)',
        backgroundOrigin: 'content-box, border-box',
        backgroundRepeat: 'no-repeat',
        filter: 'url(#remove-black)',
      })}
    />
  );
}
ButtonBorder.displayName = 'BG3ButtonBorder';

function ButtonMaskFallback() {
  return (
    <svg
      className={css({
        position: 'absolute',
      })}
      width="0"
      height="0"
    >
      <title>BG3ButtonMaskFallback</title>
      <filter id="remove-black" colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              -1 -1 -1 0 1"
          result="black-pixels"
        />
        <feComposite in="SourceGraphic" in2="black-pixels" operator="out" />
      </filter>
    </svg>
  );
}
ButtonMaskFallback.displayName = 'BG3ButtonMaskFallback';

const Button = forwardRef<ElementRef<'button'>, ButtonProps>((props, ref) => {
  return (
    <button
      type="button"
      ref={ref}
      className={css(
        {
          position: 'relative',
          borderWidth: '4px 12px',
          borderStyle: 'solid',
          borderColor: 'transparent',
          padding: '8px 24px',
          textAlign: 'center',
          color: 'white',
          transitionProperty: 'transform',
          transitionDuration: '.4s',
          _hover: {
            filter: 'brightness(0.8)',
          },
        },
        !props.children && {
          _active: {
            transform: 'scale(0.92)',
          },
          _hover: {
            filter: 'brightness(0.6)',
          },
        },
        props.css
      )}
      {...props}
    >
      {props.children}
      <ButtonBackground />
      <ButtonBorder />
      <ButtonMaskFallback />
    </button>
  );
});

Button.displayName = 'BG3Button';

export default Button;
