import React, { component } from 'react';

import Newsletterbox from './newsletterBox';
import newsletterArchive from './newsletterArchive';

class NewsletterGrid extends Component {
    render () {
        return (
            <div className='newsletter-gird'>

            <Newsletterbox date={new Date()}/>
            <newsletterArchive/>
            </div>
        )
    }
}

export default NewsletterGrid;