import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { NextPreviuosContent } from './styles';

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPosts?: number;
  totalPerPage?: number;
}

export function Pagination({
  page,
  setPage,
  totalPosts,
  totalPerPage,
}: PaginationProps) {
  const [inputPage, setInputPage] = useState(page);

  useEffect(() => {
    setInputPage(page);
  }, [page]);

  const totalPage =
    totalPosts && totalPerPage ? Math.ceil(totalPosts / totalPerPage) : 1;

  function handleNextPage() {
    setPage(state => state + 1);
    window.scrollTo(0, 0);
  }

  function handlePreviousPage() {
    setPage(state => state - 1);
    window.scrollTo(0, 0);
  }

  const handleChangeInputPage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const currentPage = Number(e.target.value);

      if (currentPage >= 0 && currentPage <= totalPage) {
        setInputPage(currentPage);
      }
    },
    [totalPage],
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setPage(inputPage);
      window.scrollTo(0, 0);
    },
    [inputPage, setPage],
  );

  return (
    <NextPreviuosContent>
      <button type="button" onClick={handlePreviousPage} disabled={page === 1}>
        Previous
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="currentPage">
          <input
            type="text"
            name="currentPage"
            id="currentPage"
            value={Number(inputPage)}
            onChange={e => handleChangeInputPage(e)}
          />
        </label>
      </form>
      <span> of {totalPage}</span>
      <button
        type="button"
        onClick={handleNextPage}
        disabled={page === totalPage}
      >
        Next
      </button>
    </NextPreviuosContent>
  );
}
