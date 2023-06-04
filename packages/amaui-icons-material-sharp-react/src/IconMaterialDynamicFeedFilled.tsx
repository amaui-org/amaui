import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDynamicFeedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFeedFilled'

      short_name='DynamicFeed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17V8h2v7h9v2Zm4-4V3h12v10Zm2-2h8V7h-8ZM2 21v-9h2v7h9v2Z"/>
    </Icon>
  );
});

IconMaterialDynamicFeedFilled.displayName = 'AmauiIconMaterialDynamicFeedFilled';

export default IconMaterialDynamicFeedFilled;
