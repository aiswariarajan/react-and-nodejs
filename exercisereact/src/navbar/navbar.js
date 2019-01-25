import React from 'react';
class NavBar extends React.Component {
    state = {}
    render() {
        return (

            <div>
                <nav class="navbar navBar-light" style={{ backgroundColor: 'pink' }}>
                    <a class="navbar-brand" href="#">
                        <img src="images/logo.jpg" width="90" height="90"></img>
                    </a>
                    
                    <div class="btn-toolbar pagination-centered center-block">

                        <div class="btn-group mr-2">
                            <button type="button" class="btn btn-secondary">Breakfast</button>
                            <button type="button" class="btn btn-secondary">Salad</button>
                            <button type="button" class="btn btn-secondary">Soup</button>
                            <button type="button" class="btn btn-secondary">Dinner</button>
                            <button type="button" class="btn btn-secondary">Dessert</button>
                        </div>

                    </div>

                    <div class="text-right">
                        <button class="btn-info btn">Sign in!!</button>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;

