import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolsWrenchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsWrenchW100Filled'

      short_name='ToolsWrench'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.225 4.45q0-.425.45-.625T9 3.625q2.175 0 3.688 1.5Q14.2 6.625 14.2 8.8q0 .6-.125 1.175-.125.575-.375 1.075l6.475 6.475q.425.425.438 1.037.012.613-.413 1.063l-.35.375q-.425.45-1.062.45-.638 0-1.088-.45l-6.5-6.5q-.525.25-1.062.375Q9.6 14 9.025 14q-2.175 0-3.687-1.512Q3.825 10.975 3.825 8.8q0-.85.2-1.3.2-.45.625-.45.15 0 .3.05t.275.175l2.35 2.35L9.85 7.4 7.475 5.025Q7.35 4.9 7.288 4.75q-.063-.15-.063-.3Z"/>
    </Icon>
  );
});

IconMaterialToolsWrenchW100Filled.displayName = 'AmauiIconMaterialToolsWrenchW100Filled';

export default IconMaterialToolsWrenchW100Filled;
