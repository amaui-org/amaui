import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsPhillipsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsPhillipsRoundedFilled'
      short_name='ToolsPhillips'

      {...props}
    >
      <path d="M7 21v-2h10v2Zm0-3V8l3.75-5h2.5L17 8v10Zm2-7 2-2V6L9 8.675Zm6 0V8.675L13 6v3Z"/>
    </Icon>
  );
});

IconMaterialToolsPhillipsRoundedFilled.displayName = 'AmauiIconMaterialToolsPhillipsRoundedFilled';

export default IconMaterialToolsPhillipsRoundedFilled;
