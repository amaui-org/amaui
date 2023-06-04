import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial3gMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3gMobiledataFilled'

      short_name='3gMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 17v-2h5v-2H3v-2h5V9H3V7h7v10Zm9 0V7h9v2h-7v6h5v-2h-2.5v-2H21v6Z"/>
    </Icon>
  );
});

IconMaterial3gMobiledataFilled.displayName = 'AmauiIconMaterial3gMobiledataFilled';

export default IconMaterial3gMobiledataFilled;
