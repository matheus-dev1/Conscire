import React from 'react'

import './styles.css'

function CardMoodle(props) {
    return(
             <div className="col-xs-6 col-sm-4">
                <div className="card">
                <a className="img-card" href={props.linkAdrress}>
                    <img src={props.image} alt={props.description}/>
                </a>

                <div className="card-content">
                        <h4 className="card-title">
                            <a href={props.linkAdrress}>{props.title}</a>
                        </h4>
                
                    <div className="">
                        {props.description}
                    </div>
                </div>

                    <div className="card-read-more">
                        <a className="btn btn-link btn-block" href={props.linkAdrress}>
                            Clique aqui para saber mais
                        </a>
                    </div>

                </div>
             </div>
    )
}

export default CardMoodle