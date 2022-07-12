import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeedSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedSharpW700'
      short_name='Feed'

      {...props}
    >
      <path d="M2.15 21.85V2.15H16L21.85 8V21.85ZM5.3 18.7H18.7V9.7H14.3V5.3H5.3ZM6.725 16.8H17.275V14.625H6.725ZM6.725 9.575H12.775V7.375H6.725ZM6.725 13.2H17.275V11H6.725ZM5.3 5.3V9.7V5.3V9.7V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialFeedSharpW700;
