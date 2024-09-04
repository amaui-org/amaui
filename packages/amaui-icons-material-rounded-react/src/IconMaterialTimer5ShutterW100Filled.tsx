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
      <path d="M574-246H380q-5.83 0-9.92-4.12-4.08-4.12-4.08-10t4.08-9.88q4.09-4 9.92-4h194q14 0 23-9t9-23v-128q0-14-9-23t-23-9H380q-5.83 0-9.92-4.08Q366-474.17 366-480v-220q0-5.83 4.08-9.92Q374.17-714 380-714h240q5.83 0 9.92 4.12 4.08 4.12 4.08 10t-4.08 9.88q-4.09 4-9.92 4H394v192h180q25 0 42.5 17.5T634-434v128q0 25-17.5 42.5T574-246Z"/>
    </Icon>
  );
});

IconMaterialTimer5ShutterW100Filled.displayName = 'AmauiIconMaterialTimer5ShutterW100Filled';

export default IconMaterialTimer5ShutterW100Filled;
