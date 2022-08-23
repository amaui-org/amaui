import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFreeCancellationSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FreeCancellationSharp'
      short_name='FreeCancellation'

      {...props}
    >
      <path d="M16.55 22.5 13 18.95 14.4 17.55 16.525 19.675 20.775 15.425 22.175 16.85ZM7.4 17 6 15.6 7.6 14 6 12.4 7.4 11 9 12.6 10.6 11 12 12.4 10.4 14 12 15.6 10.6 17 9 15.4ZM3 22V4H6V2H8V4H16V2H18V4H21V12.35L19 14.375V10H5V20H11.25L13.225 22ZM5 8H19V6H5ZM5 8V6V8Z"/>
    </Icon>
  );
});

IconMaterialFreeCancellationSharp.displayName = 'AmauiIconMaterialFreeCancellationSharp';

export default IconMaterialFreeCancellationSharp;
