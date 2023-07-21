/* eslint-disable react/prop-types */
import './hero.scss'
import './Card.scss'
import Filter from '../../filter/Filter'


function Card(props){
  return(
    <div className="card">
        <img src={props.img} alt="" />

        <h3>{props.location}</h3>
        <p>space : <span>2 BHK</span></p>
        <p>rating : <span>⭐4.5</span></p>
        <p>rent <span>( / month) <b>:</b> ₹10,000.00</span></p>
      </div>

)
}

function Index() {
  const location_list = ['kolaghat','tamluk','ghatal','jhargram','mednipur','kharagpur','panskura','mecheda','kolkata','Delhi','Mumbai','Noida','Gurgaon','Bengaluru','Hyderabad','chennai']

  return (
    <>
      <Filter/>
      <h1>This is index page</h1>
      <section className="hero">

      {location_list.map((e)=>{
        return(
          <Card key={e} location={e}/>
        )
      })}

      </section>
    </>
  )
}

export default Index
