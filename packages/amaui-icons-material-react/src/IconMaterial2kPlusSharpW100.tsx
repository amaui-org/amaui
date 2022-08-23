import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial2kPlusSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='2kPlusSharpW100'
      short_name='2kPlus'

      {...props}
    >
      <path d="M16.8 13.85H17.5V12.35H19V11.65H17.5V10.15H16.8V11.65H15.3V12.35H16.8ZM11.675 14.6H12.375V12.2L14.825 14.6H15.875L13.125 11.95L15.875 9.4H14.875L12.375 11.75V9.4H11.675ZM6.5 14.6H10.2V13.9H7.2V12.35H10.2V9.4H6.5V10.1H9.5V11.65H6.5ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterial2kPlusSharpW100.displayName = 'AmauiIconMaterial2kPlusSharpW100';

export default IconMaterial2kPlusSharpW100;
