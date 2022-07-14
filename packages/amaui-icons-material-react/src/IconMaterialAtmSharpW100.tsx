import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAtmSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AtmSharpW100'
      short_name='Atm'

      {...props}
    >
      <path d="M10.65 14.6V10.1H8.4V9.4H13.6V10.1H11.35V14.6ZM2.65 14.6V9.4H6.85V14.6H6.15V12.85H3.35V14.6ZM3.35 12.15H6.15V10.1H3.35ZM15.15 14.6V9.4H21.35V14.6H20.65V10.1H18.6V13.6H17.9V10.1H15.85V14.6Z"/>
    </Icon>
  );
});

export default IconMaterialAtmSharpW100;
