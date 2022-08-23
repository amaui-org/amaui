import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBluetoothDisabledRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothDisabledRounded'
      short_name='BluetoothDisabled'

      {...props}
    >
      <path d="M19.1 21.9 15.6 18.4 12.725 21.275Q12.525 21.475 12.213 21.55Q11.9 21.625 11.625 21.5Q11.35 21.4 11.175 21.125Q11 20.85 11 20.575V14.4L7.1 18.3Q6.825 18.575 6.4 18.575Q5.975 18.575 5.7 18.3Q5.425 18.025 5.425 17.6Q5.425 17.175 5.7 16.9L9.9 12.7L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.9ZM13 18.15 14.15 17 13 15.85ZM14.1 11.3 12.7 9.9 14.9 7.7 13 5.85V10.2L11 8.2V3.425Q11 3.15 11.175 2.887Q11.35 2.625 11.625 2.5Q11.9 2.4 12.213 2.462Q12.525 2.525 12.725 2.725L17 7Q17.15 7.15 17.213 7.325Q17.275 7.5 17.275 7.7Q17.275 7.9 17.213 8.075Q17.15 8.25 17 8.4Z"/>
    </Icon>
  );
});

IconMaterialBluetoothDisabledRounded.displayName = 'AmauiIconMaterialBluetoothDisabledRounded';

export default IconMaterialBluetoothDisabledRounded;
