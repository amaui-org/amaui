import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDynamicFeedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFeedW100'

      short_name='DynamicFeed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.3 15.7V9H8v6h8v.7ZM11 12V4.6h9.4V12Zm.7-.7h8v-4h-8Zm-8.1 8.1v-6.7h.7v6h8v.7Z"/>
    </Icon>
  );
});

IconMaterialDynamicFeedW100.displayName = 'AmauiIconMaterialDynamicFeedW100';

export default IconMaterialDynamicFeedW100;
