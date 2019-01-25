import React from 'react';
class Profile extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <div>
                    <nav class="navbar">
                        <a class="navbar-brand" href="#"></a>
                        <img src="images/profile.jpg" width="120" height="120"></img>

                    <div class="input-group col-sm-9">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="addon-wrapping">@</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"></input>
                        </div>
                    </nav>
                    </div>
        </div>
        );
    }
}

export default Profile;

