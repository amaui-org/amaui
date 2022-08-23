import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCo2SharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Co2SharpW100'
      short_name='Co2'

      {...props}
    >
      <path d="M10.4 14.6V9.4H14.6V14.6ZM11.1 13.9H13.9V10.1H11.1ZM3.4 14.6V9.4H7.6V10.6H6.9V10.1H4.1V13.9H6.9V13.4H7.6V14.6ZM17.4 17.6V14.65H20.4V13.1H17.4V12.4H21.1V15.35H18.1V16.9H21.1V17.6Z"/>
    </Icon>
  );
});

IconMaterialCo2SharpW100.displayName = 'AmauiIconMaterialCo2SharpW100';

export default IconMaterialCo2SharpW100;
