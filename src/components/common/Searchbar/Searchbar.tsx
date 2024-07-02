import { FC } from 'react';
import s from './Searchbar.module.css';
import Input from '@/components/ui/Input';

interface Props {
  id?: string;
}

const Searchbar: FC<Props> = ({ id = 'search' }) => {
  return (
    <div>
      <label className="hidden" htmlFor={id}>
        Search
      </label>
      <Input
        id={id}
        className={s.input}
        placeholder="Search for items to buy"
      />
      <div className={s.iconContainer}>
        <svg className={s.icon} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Searchbar;
