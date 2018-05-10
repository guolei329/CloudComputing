import React from 'react';
import {Jumbotron, Button, Grid, Row, Col} from 'react-bootstrap';
import CheckItem from './CheckItem.jsx';
import { db } from '../FireBaseService'
import App from "../App";

export default class CheckListContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    const productsRef = db.ref('products');
    productsRef.once('value').then( (snapshot) => {
      snapshot.forEach( (childSnapshot) => {
        const productId = childSnapshot.key;
        const data = childSnapshot.val();
        this.state.products.push((<CheckItem>))
      });
    });
  }
};