import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChairSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairSharpW100'
      short_name='Chair'

      {...props}
    >
      <path d="M4.7 18.85V17.5H2.3V9.1H4V5.9H20V9.1H21.7V17.5H19.3V18.85H18.65V17.5H5.4V18.85ZM3 16.8H21V9.8H19V14.15H5V9.8H3ZM5.7 13.45H18.3V9.1H19.3V6.6H4.7V9.1H5.7ZM12 14.15ZM12 13.45ZM12 14.15Z"/>
    </Icon>
  );
});

IconMaterialChairSharpW100.displayName = 'AmauiIconMaterialChairSharpW100';

export default IconMaterialChairSharpW100;
