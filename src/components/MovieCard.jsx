/* eslint-disable react/prop-types */

export default function MovieCard({ image, title, description, rating}) {
    return (
        <div className="movieCard">
            <img src={image} alt={title}/>
            <div className="info">
                <h2 className="title">{title}</h2>
                <div className="rating">{
                    rating > 9 ? 
                    <div className="stars">
                        <img src="assets/star.png" alt="one star" />
                        <img src="assets/star.png" alt="two stars" />
                        <img src="assets/star.png" alt="three stars" />
                        <img src="assets/star.png" alt="four stars" />
                        <img src="assets/star.png" alt="five stars" />
                    </div> : 
                    <div className="stars">
                        <img src="assets/star.png" alt="one star" />
                        <img src="assets/star.png" alt="two stars" />
                        <img src="assets/star.png" alt="three stars" />
                        <img src="assets/star.png" alt="four stars" />
                        <img src="assets/star-empty.svg" alt="" />
                    </div>
                }</div>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}