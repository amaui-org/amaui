import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialListAltSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListAltSharpW100'
      short_name='ListAlt'

      {...props}
    >
      <path d="M7.45 16.4H8.85V15H7.45ZM7.45 12.7H8.85V11.3H7.45ZM7.45 9H8.85V7.6H7.45ZM11.25 16.05H16.45V15.35H11.25ZM11.25 12.35H16.45V11.65H11.25ZM11.25 8.65H16.45V7.95H11.25ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialListAltSharpW100.displayName = 'AmauiIconMaterialListAltSharpW100';

export default IconMaterialListAltSharpW100;
