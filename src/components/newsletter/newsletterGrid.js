import React, { component } from 'react';

import Newsletterbox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewletterLatest from './newletterlatest';

class NewsletterGrid extends Component {
    render () {
        return (
            <div className='newsletter-gird'>

            <Newsletterbox date={new Date()}/>
            <NewsletterArchive/>
            <NewletterLatest/>
            </div>
        )
    }
}

export default NewsletterGrid;