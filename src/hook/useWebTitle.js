import { useEffect } from "react";

export default function useWebTitle(title) {

  const setTitle = (title) => {
    document.title = title;
  }

  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title])

  return setTitle;
}