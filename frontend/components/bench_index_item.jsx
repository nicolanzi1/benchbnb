import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';

class IndexItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const benchId = this.props.bench.id;
        this.props.history.push(`/benches/${benchId}`);
    }

    render() {
        const { description } = this.props.bench;
        return (
            <div
                className="bench-index-item"
                onClick={this.handleClick}
            >
                <div className="index-item-info">
                    <span className="index-item-category">Description:</span>
                </div>
            </div>
        );
    }
}

export default withRouter(IndexItem);