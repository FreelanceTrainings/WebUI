import React from 'react'

function ArrayDemo2() {
    const Courses=[
        {id:1,title:'C',duration:30},
        {id:2,title:'C++',duration:35},
        {id:3,title:'SQL',duration:15},
        {id:4,title:'Java',duration:90},
    ]
  return (    
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
            {
                Courses.map((x,i)=>
                <tr key={i}>
                    <td>{x.id}</td>
                    <td>{x.title}</td>
                    <td>{x.duration} Days</td>
                </tr>)
            }
            </tbody>
        </table>
    </div>
  )
}

export default ArrayDemo2