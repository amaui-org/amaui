import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial2kSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='2kSharpW100'
      short_name='2k'

      {...props}
    >
      <path d="M12.85 14.6H13.55V12.2L16 14.6H17.05L14.3 11.95L17.05 9.4H16.05L13.55 11.75V9.4H12.85ZM7 14.6H10.7V13.9H7.7V12.35H10.7V9.4H7V10.1H10V11.65H7ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterial2kSharpW100.displayName = 'AmauiIconMaterial2kSharpW100';

export default IconMaterial2kSharpW100;
