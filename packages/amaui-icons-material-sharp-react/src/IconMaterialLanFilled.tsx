import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanFilled'

      short_name='Lan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22v-7h3v-4h5V9H8V2h8v7h-3v2h5v4h3v7h-8v-7h3v-2H8v2h3v7Z"/>
    </Icon>
  );
});

IconMaterialLanFilled.displayName = 'AmauiIconMaterialLanFilled';

export default IconMaterialLanFilled;
