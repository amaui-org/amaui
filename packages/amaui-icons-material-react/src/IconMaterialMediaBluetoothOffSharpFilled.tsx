import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMediaBluetoothOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaBluetoothOffSharpFilled'
      short_name='MediaBluetoothOff'

      {...props}
    >
      <path d="M11 8.15 9 6.15V3H15V7H11ZM21.2 18.35 14.4 11.6 15.2 10.8 17.95 13.55V9H18.55L22 12.4L19.4 15L22 17.55ZM19.15 13.55 20.3 12.4 19.15 11.3ZM19.8 22.6 15.8 18.6 15.2 19.2 14.35 18.35 14.95 17.75 11 13.8V17Q11 18.65 9.825 19.825Q8.65 21 7 21Q5.35 21 4.175 19.825Q3 18.65 3 17Q3 15.35 4.175 14.175Q5.35 13 7 13Q7.575 13 8.062 13.137Q8.55 13.275 9 13.55V11.8L1.4 4.2L2.8 2.8L21.2 21.2Z"/>
    </Icon>
  );
});

IconMaterialMediaBluetoothOffSharpFilled.displayName = 'AmauiIconMaterialMediaBluetoothOffSharpFilled';

export default IconMaterialMediaBluetoothOffSharpFilled;
