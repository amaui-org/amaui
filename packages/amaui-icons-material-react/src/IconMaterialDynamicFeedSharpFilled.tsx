import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDynamicFeedSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFeedSharpFilled'
      short_name='DynamicFeed'

      {...props}
    >
      <path d="M6 17V8H8V15H17V17ZM10 13V3H22V13ZM12 11H20V7H12ZM2 21V12H4V19H13V21Z"/>
    </Icon>
  )
});

export default IconMaterialDynamicFeedSharpFilled;
