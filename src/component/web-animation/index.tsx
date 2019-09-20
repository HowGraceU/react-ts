import React, {
  useState, useRef, useEffect, useCallback,
} from 'react';
import { Button } from 'antd';

import styles from './index.css';

type DiglogStyle = {
  opacity: number
  translateY: number
}

type AnimateParam = {
  start: DiglogStyle
  end: DiglogStyle
  el: HTMLElement
}

function useAnimateIn({ start, end, el }: AnimateParam): Animation {
  const animation = [
    {
      opacity: start.opacity,
      transform: `translateY(${start.translateY}%)`,
    }, {
      opacity: end.opacity,
      transform: `translateY(${end.translateY}%)`,
    },
  ];

  const animate = el.animate(animation, { duration: 150, fill: 'both' });
  animate.pause();
  return animate;
}

export default function () {
  const [show, setShow] = useState<boolean>(false);
  const diglogRef = useRef<HTMLDivElement>();
  const conteneRef = useRef<HTMLDivElement>();
  const animateRef = useRef<Animation>();

  useEffect(() => {
    const animateParam: AnimateParam = {
      start: {
        opacity: 1,
        translateY: 0,
      },
      end: {
        opacity: 0.3,
        translateY: 30,
      },
      el: conteneRef.current,
    };

    animateRef.current = useAnimateIn(animateParam);
  }, []);

  const animateIn = useCallback(() => {
    setShow(true);
    animateRef.current.reverse();
  }, []);

  const animateOut = useCallback(async () => {
    animateRef.current.reverse();
    animateRef.current.onfinish = () => {
      setShow(false);
      animateRef.current.onfinish = null;
    };
  }, []);

  const open: () => void = () => {
    animateIn();
  };

  const close: (event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>) => void = (e) => {
    if ('which' in e) {
      if (e.which === 13) {
        animateOut();
      }
    } else {
      animateOut();
    }
  };

  const stopPropagation: (event: React.BaseSyntheticEvent) => void = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (show) diglogRef.current.focus();
  }, [show]);

  return (
    <>
      <Button type="primary" onClick={open}>open layer warp</Button>

      <div className={styles.diglogWrap} hidden={!show} ref={diglogRef} onClick={close} onKeyPress={close} role="button" tabIndex={0}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div className={styles.diglog} ref={conteneRef} onClick={stopPropagation} role="button" tabIndex={-1}>
          <p className={styles.diglogContent}>这是一个对话</p>
        </div>
      </div>
    </>
  );
}
