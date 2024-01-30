
import { Letter } from './Letter'

export  function Solution( {solution}) {

    return (
   <div>
  {solution.map((l,index)=><Letter key={index} value={l}/>)}
    </div>
  )
}
