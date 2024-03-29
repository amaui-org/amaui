import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRssFeedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RssFeedFilled'

      short_name='RssFeed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19q0-.825.587-1.413Q4.175 17 5 17q.825 0 1.412.587Q7 18.175 7 19q0 .825-.588 1.413Q5.825 21 5 21Zm13.475 0q-.6 0-1.037-.425-.438-.425-.513-1.05-.25-2.45-1.312-4.6-1.063-2.15-2.725-3.813-1.663-1.662-3.813-2.725-2.15-1.062-4.6-1.312Q3.85 7 3.425 6.55 3 6.1 3 5.475t.438-1.038q.437-.412 1.037-.362 3.075.25 5.775 1.55t4.762 3.363q2.063 2.062 3.363 4.762 1.3 2.7 1.55 5.775.05.6-.375 1.037-.425.438-1.075.438Zm-6 0q-.575 0-1.037-.413-.463-.412-.588-1.062-.45-2.425-2.2-4.175-1.75-1.75-4.175-2.2-.65-.125-1.062-.6Q3 12.075 3 11.475q0-.65.45-1.05t1.025-.325q3.7.5 6.313 3.112 2.612 2.613 3.112 6.313.075.575-.35 1.025-.425.45-1.075.45Z"/>
    </Icon>
  );
});

IconMaterialRssFeedFilled.displayName = 'AmauiIconMaterialRssFeedFilled';

export default IconMaterialRssFeedFilled;
