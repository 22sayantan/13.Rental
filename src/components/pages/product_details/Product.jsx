import './product.scss'

function Product() {
  return (
    <>
      <section className="product">
       <h1 className='heading'>product Portfolio</h1>

       <div className="desc">
        <div className="left">
          <img src="" alt="" />
        </div>

        <div className="right">
          <h1>product title</h1>
          <h2>location , city</h2>

          <div className="available">
            <h2>available</h2>

            <ul>
              <li>
                <i className="fa-solid fa-wifi"></i>
                <p>wi-fi</p>
              </li>

              <li>
                <i className="fa-solid fa-utensils"></i>
                <p>food</p>
              </li>

              <li>
                <i className="fa-solid fa-bicycle"></i>
                <p>cycle</p>
              </li>

              <li>
                <i className="fa-solid fa-glass-water"></i>
                <p>drink Water</p>
              </li>
            </ul>
          </div>
        </div>
       </div>
      </section>
    </>
  )
}

export default Product
