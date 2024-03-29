import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkChatReadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatReadFilled'

      short_name='MarkChatRead'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.35 17.175 3.55-3.55q.3-.3.7-.288.4.013.7.313.275.3.288.7.012.4-.288.7l-4.25 4.25q-.3.3-.7.287-.4-.012-.7-.312l-2.125-2.125q-.275-.275-.287-.688-.013-.412.287-.712.275-.275.7-.275.425 0 .7.275ZM6 18l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v7h-8q-.825 0-1.412.587Q12 12.175 12 13v5Z"/>
    </Icon>
  );
});

IconMaterialMarkChatReadFilled.displayName = 'AmauiIconMaterialMarkChatReadFilled';

export default IconMaterialMarkChatReadFilled;
