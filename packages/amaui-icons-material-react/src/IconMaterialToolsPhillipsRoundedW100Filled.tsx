import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsPhillipsRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsPhillipsRoundedW100Filled'
      short_name='ToolsPhillips'

      {...props}
    >
      <path d="M8.3 19.7V19h7.4v.7Zm0-1.7V9.725L11.4 5.6h1.2l3.1 4.125V18Zm.7-4.775 2.65-2.65v-4.15L9 9.975Zm6 0v-3.25l-2.65-3.55v4.15Z"/>
    </Icon>
  );
});

IconMaterialToolsPhillipsRoundedW100Filled.displayName = 'AmauiIconMaterialToolsPhillipsRoundedW100Filled';

export default IconMaterialToolsPhillipsRoundedW100Filled;
