'use strict'

/**
 *  Unsplash section
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import './UnsplashSection.css'

const STYLE = (photo, ixid, w, bgc) => {
    return {
        'backgroundColor': `${bgc}`,
        'backgroundImage': `url('https://images.unsplash.com/photo-${photo}?ixlib=rb-1.2.1&ixid=${ixid}&auto=format&fit=crop&w=${w}&q=80')`
    }
}

export default ({photo, ixid, w, bgc}) =>
    <div className="unsplash" style={STYLE(photo, ixid, w, bgc)}>

    </div>