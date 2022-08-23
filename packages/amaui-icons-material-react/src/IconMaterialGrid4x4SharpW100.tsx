import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGrid4x4SharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid4x4SharpW100'
      short_name='Grid4x4'

      {...props}
    >
      <path d="M6.95 20.05V17.05H3.95V16.35H6.95V12.35H3.95V11.65H6.95V7.65H3.95V6.95H6.95V3.95H7.65V6.95H11.65V3.95H12.35V6.95H16.35V3.95H17.05V6.95H20.05V7.65H17.05V11.65H20.05V12.35H17.05V16.35H20.05V17.05H17.05V20.05H16.35V17.05H12.35V20.05H11.65V17.05H7.65V20.05ZM7.65 11.65H11.65V7.65H7.65ZM7.65 16.35H11.65V12.35H7.65ZM12.35 16.35H16.35V12.35H12.35ZM12.35 11.65H16.35V7.65H12.35Z"/>
    </Icon>
  );
});

IconMaterialGrid4x4SharpW100.displayName = 'AmauiIconMaterialGrid4x4SharpW100';

export default IconMaterialGrid4x4SharpW100;
