import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQrCode2SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCode2SharpFilled'
      short_name='QrCode2'

      {...props}
    >
      <path d="M13 21V19H15V21ZM11 19V14H13V19ZM19 16V12H21V16ZM17 12V10H19V12ZM5 14V12H7V14ZM3 12V10H5V12ZM12 5V3H14V5ZM4.5 7.5H7.5V4.5H4.5ZM3 9V3H9V9ZM4.5 19.5H7.5V16.5H4.5ZM3 21V15H9V21ZM16.5 7.5H19.5V4.5H16.5ZM15 9V3H21V9ZM17 21V18H15V16H19V19H21V21ZM13 14V12H17V14ZM9 14V12H7V10H13V12H11V14ZM10 9V5H12V7H14V9ZM5.25 6.75V5.25H6.75V6.75ZM5.25 18.75V17.25H6.75V18.75ZM17.25 6.75V5.25H18.75V6.75Z"/>
    </Icon>
  );
});

IconMaterialQrCode2SharpFilled.displayName = 'AmauiIconMaterialQrCode2SharpFilled';

export default IconMaterialQrCode2SharpFilled;
