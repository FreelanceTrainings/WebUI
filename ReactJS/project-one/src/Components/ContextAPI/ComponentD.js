import React from 'react'
import { UserConsumer } from './UserContext'

function ComponentD() {
  return (
    <div>
        ComponentD
        <UserConsumer>
            {
                (userid)=>{
                    return(
                        <h1>{userid}</h1>
                    )
                }
            }
        </UserConsumer>
    </div>
  )
}

export default ComponentD