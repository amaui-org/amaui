import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDynamicFeedSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFeedSharpW100Filled'
      short_name='DynamicFeed'

      {...props}
    >
      <path d="M7.3 15.7V9H8V15H16V15.7ZM11 12V4.6H20.4V12ZM11.7 11.3H19.7V7.3H11.7ZM3.6 19.4V12.7H4.3V18.7H12.3V19.4Z"/>
    </Icon>
  );
});

IconMaterialDynamicFeedSharpW100Filled.displayName = 'AmauiIconMaterialDynamicFeedSharpW100Filled';

export default IconMaterialDynamicFeedSharpW100Filled;
