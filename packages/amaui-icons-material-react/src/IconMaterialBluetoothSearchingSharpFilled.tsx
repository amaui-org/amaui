import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBluetoothSearchingSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothSearchingSharpFilled'
      short_name='BluetoothSearching'

      {...props}
    >
      <path d="M9 22V14.4L4.4 19L3 17.6L8.6 12L3 6.4L4.4 5L9 9.6V2H10L15.7 7.7L11.4 12L15.7 16.3L10 22ZM11 9.6 12.9 7.7 11 5.85ZM11 18.15 12.9 16.3 11 14.4ZM16.55 14.35 14.25 12 16.55 9.7Q16.775 10.25 16.913 10.825Q17.05 11.4 17.05 12Q17.05 12.6 16.913 13.188Q16.775 13.775 16.55 14.35ZM19.5 17.2 18.25 16Q18.75 15.075 19.025 14.062Q19.3 13.05 19.3 12Q19.3 10.95 19.025 9.938Q18.75 8.925 18.25 8L19.5 6.75Q20.225 7.95 20.613 9.275Q21 10.6 21 12Q21 13.4 20.613 14.712Q20.225 16.025 19.5 17.2Z"/>
    </Icon>
  );
});

IconMaterialBluetoothSearchingSharpFilled.displayName = 'AmauiIconMaterialBluetoothSearchingSharpFilled';

export default IconMaterialBluetoothSearchingSharpFilled;
