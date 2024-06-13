import React from 'react'
import data from "../data.json"
const Services = () => {
console.log('data', data)
  return (
    <div className='container fluid'>
      <h1>Task</h1>
      <div>
      <table>
  <tr>
    <th>Date</th>
    <th>Dubai</th>
    <th>Disawar</th>
    <th>Gali</th>
    <th>Faridabad</th>
    <th>Gaziyabad</th>
    <th>Delhi-2 pm</th>
  </tr>
  <tc>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tc>
  <tc>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tc>
</table>

      </div>
    </div>
  )
}

export default Services;