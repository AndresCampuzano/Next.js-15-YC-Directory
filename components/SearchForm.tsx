import React from 'react';
import Form from 'next/form';
import { SearchFormReset } from '@/components/SearchFormReset';

export const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action={'/'} scroll={false} className={'search-form'}>
      <input
        name={'query'}
        defaultValue={''}
        className={'search-input'}
        placeholder={'Search Startups'}
      />
      <div className={'flex gap-2'}>
        {query && <SearchFormReset />}
        <button type={'submit'} className={'search-btn text-white'}>
          S
        </button>
      </div>
    </Form>
  );
};
