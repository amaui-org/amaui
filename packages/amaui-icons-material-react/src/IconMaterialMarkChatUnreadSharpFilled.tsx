import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkChatUnreadSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatUnreadSharpFilled'
      short_name='MarkChatUnread'

      {...props}
    >
      <path d="M19 6Q17.75 6 16.875 5.125Q16 4.25 16 3Q16 1.75 16.875 0.875Q17.75 0 19 0Q20.25 0 21.125 0.875Q22 1.75 22 3Q22 4.25 21.125 5.125Q20.25 6 19 6ZM2 22V2H14.1Q14 2.5 14 3Q14 3.5 14.1 4Q14.45 5.725 15.825 6.862Q17.2 8 19 8Q19.8 8 20.575 7.75Q21.35 7.5 22 7V18H6Z"/>
    </Icon>
  );
});

export default IconMaterialMarkChatUnreadSharpFilled;
