import React, {Component} from 'react';

import Aux from './../../hoc/Aux';
import Burger from '../../burger/Burger';

class BurgerBuilder extends Component{

    state = {
        ingredients : {
            cheese : 2,
            salad : 2,
            bacon : 2,
            meat : 0
        }
    }

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;