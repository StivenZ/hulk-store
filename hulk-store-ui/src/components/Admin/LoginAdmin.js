import React from 'react';

function LoginAdmin () {
    return (
        <React.Fragment>
            <div className='columns'>
                <div className='column'></div>
                <div className='column'>
                    <form class="box">
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input class="input" size='2' type="email" placeholder="e.g. orrico@admin.com"></input>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                            <input class="input" type="password" placeholder="********"></input>
                            </div>
                        </div>

                        <button class="button is-primary">Sign in</button>
                    </form>
                </div>
                <div className='column'></div>
            </div>
        </React.Fragment>
    )
}

export default LoginAdmin;