import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeFilled'

      short_name='Home'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21V9l8-6 8 6v12h-6v-7h-4v7Z"/>
    </Icon>
  );
});

IconMaterialHomeFilled.displayName = 'AmauiIconMaterialHomeFilled';

export default IconMaterialHomeFilled;
