export default function cat({catID, color}={}) {
  let action = !!(catID && color)? `/cats/${catID}` : '/cats'
  let name = `<input type=text name=catID placeholder="Enter your cat name">`
  let del = `<form action="/cats/${catID}/delete" method=post><button type=submit>delete</button></form>`
  return `<div>
    <form action="${action}" method=post>
      ${catID? `<b>${catID}</b>` : name}
      <select name=color>
        <option${color === 'grey'? ' selected':''}>grey</option>
        <option${color === 'black'? ' selected':''}>black</option>
        <option${color === 'orange'? ' selected':''}>orange</option>
      </select>
      <button type=submit>save</button>
    </form>
    ${catID? del : ''} 
  </div>`
} 
