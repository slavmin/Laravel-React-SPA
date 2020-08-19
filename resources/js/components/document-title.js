import { useEffect } from 'react';

function useDocumentTitle(title, description) {
  useEffect(() => {
    document.title = title;
    document.description = description;
  }, [title, description]);
}

export default useDocumentTitle;
