import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRssFeed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RssFeed'

      short_name='RssFeed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19q0-.825.587-1.413Q4.175 17 5 17q.825 0 1.412.587Q7 18.175 7 19q0 .825-.588 1.413Q5.825 21 5 21Zm12 0q0-2.9-1.1-5.438-1.1-2.537-3.012-4.45Q10.975 9.2 8.438 8.1 5.9 7 3 7V4q3.525 0 6.625 1.338 3.1 1.337 5.4 3.637 2.3 2.3 3.638 5.4Q20 17.475 20 21Zm-6 0q0-3.325-2.338-5.662Q6.325 13 3 13v-3q2.3 0 4.3.863 2 .862 3.488 2.349 1.487 1.488 2.349 3.488Q14 18.7 14 21Z"/>
    </Icon>
  );
});

IconMaterialRssFeed.displayName = 'AmauiIconMaterialRssFeed';

export default IconMaterialRssFeed;
