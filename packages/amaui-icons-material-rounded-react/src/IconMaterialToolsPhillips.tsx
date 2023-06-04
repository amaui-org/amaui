import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolsPhillips = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsPhillips'

      short_name='ToolsPhillips'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21v-2h10v2Zm0-3V8l3.75-5h2.5L17 8v10Zm2-2h6v-2.175l-3-3-3 3Zm0-5 2-2V6L9 8.675Zm6 0V8.675L13 6v3Zm0 5H9h6Z"/>
    </Icon>
  );
});

IconMaterialToolsPhillips.displayName = 'AmauiIconMaterialToolsPhillips';

export default IconMaterialToolsPhillips;
