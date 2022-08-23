import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopAccessDisabledRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopAccessDisabledRoundedW100Filled'
      short_name='DesktopAccessDisabled'

      {...props}
    >
      <path d="M19.05 16.7 6.65 4.3H19.2Q19.85 4.3 20.275 4.725Q20.7 5.15 20.7 5.8V15.2Q20.7 15.85 20.2 16.3Q19.7 16.75 19.05 16.7ZM19.6 21.1 15.2 16.7H12.7V18.7H14.35Q14.5 18.7 14.6 18.8Q14.7 18.9 14.7 19.05Q14.7 19.2 14.6 19.3Q14.5 19.4 14.35 19.4H9.65Q9.5 19.4 9.4 19.3Q9.3 19.2 9.3 19.05Q9.3 18.9 9.4 18.8Q9.5 18.7 9.65 18.7H11.3V16.7H4.8Q4.15 16.7 3.725 16.275Q3.3 15.85 3.3 15.2V4.8L2.1 3.6Q2 3.5 1.988 3.362Q1.975 3.225 2.1 3.1Q2.225 2.975 2.35 2.975Q2.475 2.975 2.6 3.1L20.1 20.6Q20.2 20.7 20.213 20.837Q20.225 20.975 20.1 21.1Q19.975 21.225 19.85 21.225Q19.725 21.225 19.6 21.1Z"/>
    </Icon>
  );
});

IconMaterialDesktopAccessDisabledRoundedW100Filled.displayName = 'AmauiIconMaterialDesktopAccessDisabledRoundedW100Filled';

export default IconMaterialDesktopAccessDisabledRoundedW100Filled;
