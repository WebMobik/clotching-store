import { useEffect } from 'react'

export const useClickOutside = (ref: any, isShow: boolean, callback: any) => {
    const handleClick = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target) && isShow) {
        callback();
      }
    };

    useEffect(() => {
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
      };
    });
};