import React from 'react'

const ClientDetails = ({img}) => {
  return (
    <div className="details">
    <img src={img} alt=""/>
    <div className="clients-details">
        <h3>John Doe</h3>
        <p>Senior Marketing Manager</p>
        <p>Phone: +2349030297281</p>
        <p>Email: example@email.com</p>
    </div>
</div>
  )
}

export default ClientDetails