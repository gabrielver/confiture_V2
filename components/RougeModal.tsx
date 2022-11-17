import React from 'react'

 type Props = {openRouge: any}

 function RougeModal({openRouge}: Props) {

    return (
            <div className="bg-modal">
            <div className="modal-content">
            <div className="close" onClick={() => openRouge(false)}>X</div>
              <h4>Nos confitures Aux fruits Rouges</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eos ad modi beatae vel perferendis ullam consequatur labore dolorum quis?</p>
              
            </div>
           </div>
           
    )
}

export default RougeModal