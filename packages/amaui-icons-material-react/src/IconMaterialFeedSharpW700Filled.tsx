import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeedSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedSharpW700Filled'
      short_name='Feed'

      {...props}
    >
      <path d="M2.15 21.85V2.15H16L21.85 8V21.85ZM6.725 16.8H17.275V14.625H6.725ZM6.725 9.575H12.775V7.375H6.725ZM6.725 13.2H17.275V11H6.725ZM14.3 9.7H18.7L14.3 5.3Z"/>
    </Icon>
  )
});

export default IconMaterialFeedSharpW700Filled;
