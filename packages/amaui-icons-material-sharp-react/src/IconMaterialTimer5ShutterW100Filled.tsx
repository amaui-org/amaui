import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimer5ShutterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer5ShutterW100Filled'

      short_name='Timer5Shutter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M366-246v-28h240v-192H366v-248h268v28H394v192h240v248H366Z"/>
    </Icon>
  );
});

IconMaterialTimer5ShutterW100Filled.displayName = 'AmauiIconMaterialTimer5ShutterW100Filled';

export default IconMaterialTimer5ShutterW100Filled;
