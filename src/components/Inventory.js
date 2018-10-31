import React from "react";
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                <AddFishForm addFish={this.props.addFish} />
                {/* this doesn't live in inventory, it's just been passed in via props */}
            </div>
        );
    }
}

export default Inventory;