import './aboutus.css';

const Aboutus = () => {
    return (
        <>
        <div className="container container-padding">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 bg-cl">
                    <img src="https://via.placeholder.com/300/09f/fff.png" alt='my pic'/><br/><br/>
                    <strong>Jack Carter</strong><br/>
                    <strong>jack@carter.com</strong>
                </div>
                <div className="col-md-1"></div>
            </div>
            <div className='row'>
                <div className='col-md-1'></div>
                <div className=' col-md-10 description-block'>
                            What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            

                </div>
                <div className='col-md-1'></div>
            </div>
               
            <div className="col-md-1"></div>
        </div>
        </>
    )
}
export default Aboutus