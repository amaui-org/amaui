import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebTrafficFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebTrafficFilled'

      short_name='WebTraffic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-480v-80h120v80H80Zm136 222-56-58 84-84 58 56-86 86Zm28-382-84-84 56-58 86 86-58 56Zm476 480L530-350l-50 150-120-400 400 120-148 52 188 188-80 80ZM400-720v-120h80v120h-80Zm236 80-58-56 86-86 56 56-84 86Z"/>
    </Icon>
  );
});

IconMaterialWebTrafficFilled.displayName = 'AmauiIconMaterialWebTrafficFilled';

export default IconMaterialWebTrafficFilled;
