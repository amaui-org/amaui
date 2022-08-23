import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBluetoothConnectedSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothConnectedSharpFilled'
      short_name='BluetoothConnected'

      {...props}
    >
      <path d="M11 22V14.4L6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L11 9.6V2H12L17.7 7.7L13.4 12L17.7 16.3L12 22ZM13 9.6 14.9 7.7 13 5.85ZM13 18.15 14.9 16.3 13 14.4ZM5 13.5Q4.375 13.5 3.938 13.062Q3.5 12.625 3.5 12Q3.5 11.375 3.938 10.938Q4.375 10.5 5 10.5Q5.625 10.5 6.062 10.938Q6.5 11.375 6.5 12Q6.5 12.625 6.062 13.062Q5.625 13.5 5 13.5ZM19 13.5Q18.375 13.5 17.938 13.062Q17.5 12.625 17.5 12Q17.5 11.375 17.938 10.938Q18.375 10.5 19 10.5Q19.625 10.5 20.062 10.938Q20.5 11.375 20.5 12Q20.5 12.625 20.062 13.062Q19.625 13.5 19 13.5Z"/>
    </Icon>
  );
});

IconMaterialBluetoothConnectedSharpFilled.displayName = 'AmauiIconMaterialBluetoothConnectedSharpFilled';

export default IconMaterialBluetoothConnectedSharpFilled;
