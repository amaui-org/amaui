import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial3kPlusSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='3kPlusSharpW700'
      short_name='3kPlus'

      {...props}
    >
      <path d="M16.625 14H17.625V12.5H18.7V11.5H17.625V10H16.625V11.5H15.125V12.5H16.625ZM11.525 15H13.025V12.75L14.775 15H16.55L14.275 12L16.55 9H14.775L13.025 11.25V9H11.525ZM6.125 15H10.625V9H6.125V10.5H9.125V11.5H7.125V12.5H9.125V13.5H6.125ZM2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V5.3H5.3ZM5.3 18.7V5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterial3kPlusSharpW700;
