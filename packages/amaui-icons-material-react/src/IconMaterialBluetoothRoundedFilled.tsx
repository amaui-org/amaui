import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBluetoothRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothRoundedFilled'
      short_name='Bluetooth'

      {...props}
    >
      <path d="M11.625 21.5Q11.35 21.4 11.175 21.125Q11 20.85 11 20.575V14.4L7.1 18.3Q6.825 18.575 6.4 18.575Q5.975 18.575 5.7 18.3Q5.425 18.025 5.425 17.6Q5.425 17.175 5.7 16.9L10.6 12L5.7 7.1Q5.425 6.825 5.425 6.4Q5.425 5.975 5.7 5.7Q5.975 5.425 6.4 5.425Q6.825 5.425 7.1 5.7L11 9.6V3.425Q11 3.15 11.175 2.887Q11.35 2.625 11.625 2.5Q11.9 2.4 12.213 2.462Q12.525 2.525 12.725 2.725L17 7Q17.15 7.15 17.213 7.325Q17.275 7.5 17.275 7.7Q17.275 7.9 17.213 8.075Q17.15 8.25 17 8.4L13.4 12L17 15.6Q17.15 15.75 17.213 15.925Q17.275 16.1 17.275 16.3Q17.275 16.5 17.213 16.675Q17.15 16.85 17 17L12.725 21.275Q12.525 21.475 12.213 21.55Q11.9 21.625 11.625 21.5ZM13 9.6 14.9 7.7 13 5.85ZM13 18.15 14.9 16.3 13 14.4Z"/>
    </Icon>
  );
});

IconMaterialBluetoothRoundedFilled.displayName = 'AmauiIconMaterialBluetoothRoundedFilled';

export default IconMaterialBluetoothRoundedFilled;
