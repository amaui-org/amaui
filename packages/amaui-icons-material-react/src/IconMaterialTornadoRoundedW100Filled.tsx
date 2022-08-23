import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTornadoRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TornadoRoundedW100Filled'
      short_name='Tornado'

      {...props}
    >
      <path d="M5.775 8.65 4.55 6.55Q4.125 5.8 4.55 5.05Q4.975 4.3 5.85 4.3H18.15Q19.025 4.3 19.45 5.05Q19.875 5.8 19.45 6.55L18.225 8.65ZM8.675 13.65 6.175 9.35H17.825L15.325 13.65ZM10.7 17.175 9.075 14.35H14.925L13.3 17.175Q12.875 17.925 12 17.925Q11.125 17.925 10.7 17.175Z"/>
    </Icon>
  );
});

IconMaterialTornadoRoundedW100Filled.displayName = 'AmauiIconMaterialTornadoRoundedW100Filled';

export default IconMaterialTornadoRoundedW100Filled;
