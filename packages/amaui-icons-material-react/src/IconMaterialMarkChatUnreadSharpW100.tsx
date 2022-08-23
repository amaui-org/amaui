import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkChatUnreadSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatUnreadSharpW100'
      short_name='MarkChatUnread'

      {...props}
    >
      <path d="M3.3 19.5V3.3H14.75Q14.7 3.475 14.688 3.637Q14.675 3.8 14.65 4H4V17.8L5.8 16H20V8.475Q20.2 8.425 20.363 8.375Q20.525 8.325 20.7 8.25V16.7H6.1ZM4 4.8Q4 4.8 4 4.8Q4 4.8 4 4.8V16V17.8V4Q4 4.6 4 4.7Q4 4.8 4 4.8ZM19 6.6Q18.025 6.6 17.338 5.912Q16.65 5.225 16.65 4.25Q16.65 3.275 17.338 2.587Q18.025 1.9 19 1.9Q19.975 1.9 20.663 2.587Q21.35 3.275 21.35 4.25Q21.35 5.225 20.663 5.912Q19.975 6.6 19 6.6Z"/>
    </Icon>
  );
});

IconMaterialMarkChatUnreadSharpW100.displayName = 'AmauiIconMaterialMarkChatUnreadSharpW100';

export default IconMaterialMarkChatUnreadSharpW100;
