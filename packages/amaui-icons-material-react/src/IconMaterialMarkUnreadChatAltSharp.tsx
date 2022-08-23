import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkUnreadChatAltSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkUnreadChatAltSharp'
      short_name='MarkUnreadChatAlt'

      {...props}
    >
      <path d="M2 22V2H14.1Q14 2.5 14 3Q14 3.5 14.1 4H4V16H20V7.9Q20.575 7.775 21.075 7.562Q21.575 7.35 22 7V18H6ZM6 14H14V12H6ZM6 11H18V9H6ZM6 8H18V7.9Q17.075 7.7 16.312 7.212Q15.55 6.725 15 6H6ZM4 4Q4 4 4 4Q4 4 4 4V16V4Q4 4 4 4Q4 4 4 4ZM19 6Q17.75 6 16.875 5.125Q16 4.25 16 3Q16 1.75 16.875 0.875Q17.75 0 19 0Q20.25 0 21.125 0.875Q22 1.75 22 3Q22 4.25 21.125 5.125Q20.25 6 19 6Z"/>
    </Icon>
  );
});

IconMaterialMarkUnreadChatAltSharp.displayName = 'AmauiIconMaterialMarkUnreadChatAltSharp';

export default IconMaterialMarkUnreadChatAltSharp;
