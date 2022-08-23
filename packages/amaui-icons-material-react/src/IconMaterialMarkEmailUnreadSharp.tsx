import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkEmailUnreadSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailUnreadSharp'
      short_name='MarkEmailUnread'

      {...props}
    >
      <path d="M2 20V4H14.1Q14 4.5 14 5Q14 5.5 14.1 6H4L12 11L15.65 8.725Q16 9.05 16.413 9.287Q16.825 9.525 17.275 9.7L12 13L4 8V18H20V9.9Q20.575 9.775 21.075 9.55Q21.575 9.325 22 9V20ZM4 6V18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6ZM19 8Q17.75 8 16.875 7.125Q16 6.25 16 5Q16 3.75 16.875 2.875Q17.75 2 19 2Q20.25 2 21.125 2.875Q22 3.75 22 5Q22 6.25 21.125 7.125Q20.25 8 19 8Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailUnreadSharp.displayName = 'AmauiIconMaterialMarkEmailUnreadSharp';

export default IconMaterialMarkEmailUnreadSharp;
