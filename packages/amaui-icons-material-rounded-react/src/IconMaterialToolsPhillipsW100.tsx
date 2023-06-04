import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolsPhillipsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsPhillipsW100'

      short_name='ToolsPhillips'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 19.7V19h7.4v.7Zm0-1.7V9.725L11.4 5.6h1.2l3.1 4.125V18Zm.7-.7h6v-3.1l-3-3-3 3Zm0-4.075 2.65-2.65v-4.15L9 9.975Zm6 0v-3.25l-2.65-3.55v4.15Zm0 4.075H9h6Z"/>
    </Icon>
  );
});

IconMaterialToolsPhillipsW100.displayName = 'AmauiIconMaterialToolsPhillipsW100';

export default IconMaterialToolsPhillipsW100;
