import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSevereColdSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SevereColdSharp'
      short_name='SevereCold'

      {...props}
    >
      <path d="M20 10Q19.575 10 19.288 9.712Q19 9.425 19 9Q19 8.575 19.288 8.287Q19.575 8 20 8Q20.425 8 20.712 8.287Q21 8.575 21 9Q21 9.425 20.712 9.712Q20.425 10 20 10ZM10 22V18.4L7.4 21L6 19.6L10 15.6V14H8.4L4.4 18L3 16.6L5.6 14H2V12H5.6L3 9.4L4.4 8L8.4 12H10V10.4L6 6.4L7.4 5L10 7.6V4H12V7.6L14.6 5L16 6.4L12 10.4V12H20V14H16.4L19 16.6L17.6 18L13.6 14H12V15.6L16 19.6L14.6 21L12 18.4V22ZM19 7V2H21V7Z"/>
    </Icon>
  );
});

IconMaterialSevereColdSharp.displayName = 'AmauiIconMaterialSevereColdSharp';

export default IconMaterialSevereColdSharp;
