

export function Letter({value,handelClick}) {

  return (
    <span onClick={()=>{handelClick(value)}}> {value}</span>
  );
}
