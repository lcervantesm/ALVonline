import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Items extends Component {
    state = {
        items: [],
        item: "",
        qty: 0,
        price: 0,
        tags: [],
        updated: "",
        features: {}
    };

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        API.getItems()
            .then(res =>
            this.setState({ items: res.data, item: "", qty: 0, price: 0, tags: [], updated: "", features: {} })
        )
        .catch(err => console.log(err));
    };

    deleteItem = id => {
        API.deleteItem(id)
        .then(res => this.loadItems())
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
        [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.item && this.state.price) {
        API.saveItem({
            item: this.state.item,
            qty: this.state.qty,
            tags: this.state.tags,
            updated: this.state.updated,
            features: this.state.features
        })
            .then(res => this.loadItems())
            .catch(err => console.log(err));
    }
    };

    render() {
        return (
        <Container fluid>
            <Row>
            <Col size="md-6">
                <Jumbotron>
                <h1>What do you want to sell?</h1>
                </Jumbotron>
            <form>
                <Input
                value={this.state.item}
                onChange={this.handleInputChange}
                name="item"
                placeholder="Item (required)"
                />
                <Input
                value={this.state.qty}
                onChange={this.handleInputChange}
                name="quantity"
                placeholder="Quantity (required)"
                />
                <TextArea
                value={this.state.tags}
                onChange={this.handleInputChange}
                name="tags"
                placeholder="Tags (Optional)"
                />
                <Input
                value={this.state.features}
                onChange={this.handleInputChange}
                name="features"
                placeholder="Features (required)"
                />
                <FormBtn
                disabled={!(this.state.item && this.state.price)}
                onClick={this.handleFormSubmit}
                >
                Submit Item
                </FormBtn>
            </form>
            </Col>
            <Col size="md-6 sm-12">
                <Jumbotron>
                <h1>List of items on sale</h1>
                </Jumbotron>
                {this.state.items.length ? (
                <List>
                    {this.state.items.map(item => (
                    <ListItem key={item._id}>
                        <Link to={"/items/" + item._id}>
                        <strong>
                            {item.item} price {item.price}
                        </strong>
                        </Link>
                        <DeleteBtn onClick={() => this.deleteItem(item._id)} />
                    </ListItem>
                    ))}
                </List>
                ) : (
                <h3>No Results to Display</h3>
                )}
            </Col>
            </Row>
        </Container>
        );
    }
}

export default Items;
