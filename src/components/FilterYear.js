import movieSceneItem from './MovieSceneItem';

function FilterYear(props) {
  const handleSelectOption = (ev) => {
    props.handleSearchYear(parseInt(ev.target.value));
  };
  const renderYears = () => {
    return props.years.map((theYear) => {
      return (
        <>
          <option value={theYear}>{theYear}</option>
        </>
      );
    });
  };
  return (
    <>
      <label> Year</label>
      <select name='year' onChange={handleSelectOption}>
        <option value='all'>ALL</option>
        {renderYears()}
      </select>
    </>
  );
}
export default FilterYear;
