import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeedOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedOutlinedW700Filled'
      short_name='Feed'

      {...props}
    >
      <path d="M5 21.85Q3.825 21.85 2.987 21.013Q2.15 20.175 2.15 19V5Q2.15 3.825 2.987 2.987Q3.825 2.15 5 2.15H16L21.85 8V19Q21.85 20.175 21.013 21.013Q20.175 21.85 19 21.85ZM14.3 9.7H18.7L14.3 5.3ZM6.725 9.575H12.775V7.375H6.725ZM6.725 13.2H17.275V11H6.725ZM6.725 16.8H17.275V14.625H6.725Z"/>
    </Icon>
  )
});

export default IconMaterialFeedOutlinedW700Filled;
