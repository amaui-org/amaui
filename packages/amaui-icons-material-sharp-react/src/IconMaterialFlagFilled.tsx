import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlagFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagFilled'

      short_name='Flag'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21V4h9l.4 2H20v10h-7l-.4-2H7v7Z"/>
    </Icon>
  );
});

IconMaterialFlagFilled.displayName = 'AmauiIconMaterialFlagFilled';

export default IconMaterialFlagFilled;
