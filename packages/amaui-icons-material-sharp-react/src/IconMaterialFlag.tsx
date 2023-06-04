import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlag = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flag'

      short_name='Flag'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21V4h9l.4 2H20v10h-7l-.4-2H7v7Zm7.5-11Zm2.15 4H18V8h-5.25l-.4-2H7v6h7.25Z"/>
    </Icon>
  );
});

IconMaterialFlag.displayName = 'AmauiIconMaterialFlag';

export default IconMaterialFlag;
