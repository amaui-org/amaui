import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkChatUnreadSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatUnreadSharpW100Filled'
      short_name='MarkChatUnread'

      {...props}
    >
      <path d="M19 6.6Q18.025 6.6 17.338 5.912Q16.65 5.225 16.65 4.25Q16.65 3.275 17.338 2.587Q18.025 1.9 19 1.9Q19.975 1.9 20.663 2.587Q21.35 3.275 21.35 4.25Q21.35 5.225 20.663 5.912Q19.975 6.6 19 6.6ZM3.3 19.5V3.3H14.75Q14.7 3.475 14.688 3.637Q14.675 3.8 14.65 4Q14.65 6.025 15.925 7.312Q17.2 8.6 19 8.6Q19.425 8.6 19.863 8.512Q20.3 8.425 20.7 8.25V16.7H6.1Z"/>
    </Icon>
  );
});

IconMaterialMarkChatUnreadSharpW100Filled.displayName = 'AmauiIconMaterialMarkChatUnreadSharpW100Filled';

export default IconMaterialMarkChatUnreadSharpW100Filled;
