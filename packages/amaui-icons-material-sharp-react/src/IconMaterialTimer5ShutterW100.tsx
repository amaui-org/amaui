import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimer5ShutterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer5ShutterW100'

      short_name='Timer5Shutter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M366-246v-28h240v-192H366v-248h268v28H394v192h240v248H366Z"/>
    </Icon>
  );
});

IconMaterialTimer5ShutterW100.displayName = 'AmauiIconMaterialTimer5ShutterW100';

export default IconMaterialTimer5ShutterW100;
