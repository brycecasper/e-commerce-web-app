import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Music from './components/categories/Music';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />
        <Route path='/music' component={Music} />
    </Switch>
)