import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkChatRead = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatRead'

      short_name='MarkChatRead'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.35 17.175 3.55-3.55q.3-.3.7-.288.4.013.7.313.275.3.288.7.012.4-.288.7l-4.25 4.25q-.3.3-.7.3-.4 0-.7-.3l-2.125-2.15q-.275-.275-.287-.688-.013-.412.287-.712.275-.275.7-.275.425 0 .7.275ZM6 18l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v7h-2V4H4v12h8v2Zm-2-2V4Z"/>
    </Icon>
  );
});

IconMaterialMarkChatRead.displayName = 'AmauiIconMaterialMarkChatRead';

export default IconMaterialMarkChatRead;
