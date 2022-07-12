import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRttSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RttSharpW100Filled'
      short_name='Rtt'

      {...props}
    >
      <path d="M10.725 20.05 10.825 19.35H13.175L15.475 4.6H11.025L10.325 9.1H9.625L10.425 3.9H21.425L20.625 9.1H19.925L20.625 4.6H16.175L13.875 19.35H16.225L16.125 20.05ZM4.275 6.35 4.375 5.65H8.65L8.55 6.35ZM3.675 10.35 3.775 9.65H8.05L7.95 10.35ZM2.575 18.35 2.675 17.65H9.175L9.075 18.35ZM3.225 14.35 3.325 13.65H9.825L9.725 14.35Z"/>
    </Icon>
  )
});

export default IconMaterialRttSharpW100Filled;
