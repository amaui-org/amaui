import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoCameraBackSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBackSharpW100'
      short_name='VideoCameraBack'

      {...props}
    >
      <path d="M3.925 18.7V5.3H17.325V11.5L20.075 8.75V15.25L17.325 12.5V18.7ZM4.625 18H16.625V6H4.625ZM6.475 15.65H14.775L12.225 12.25L9.725 15.35L8.125 13.5ZM4.625 18V6V18Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBackSharpW100.displayName = 'AmauiIconMaterialVideoCameraBackSharpW100';

export default IconMaterialVideoCameraBackSharpW100;
