import { useGlobalContext } from './context';
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    console.log(searchValue);
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className='title'>Unsplash Images</h1>
      <form className='search-form' onSubmit={onSubmitHandler}>
        <input
          className='form-input search-input'
          type='text'
          name='search'
          placeholder='search a photo'
        />
        <button type='submit' className='btn'>
          ok
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
