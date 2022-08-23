import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHevcSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HevcSharpW100'
      short_name='Hevc'

      {...props}
    >
      <path d="M3.4 14.6V9.4H4.1V11.4H5.9V9.4H6.6V14.6H5.9V12.1H4.1V14.6ZM17.4 14.6V9.4H20.6V10.6H19.9V10.1H18.1V13.9H19.9V13.4H20.6V14.6ZM13.7 14.6 12.45 9.4H13.175L14.25 13.85L15.325 9.4H16.05L14.8 14.6ZM8.35 14.6V9.4H11.05V10.1H9.05V11.4H11.05V12.1H9.05V13.9H11.05V14.6Z"/>
    </Icon>
  );
});

IconMaterialHevcSharpW100.displayName = 'AmauiIconMaterialHevcSharpW100';

export default IconMaterialHevcSharpW100;
