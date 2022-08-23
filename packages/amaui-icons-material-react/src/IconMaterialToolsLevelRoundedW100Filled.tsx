import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsLevelRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsLevelRoundedW100Filled'
      short_name='ToolsLevel'

      {...props}
    >
      <path d="M4.8 15.7q-.625 0-1.063-.438Q3.3 14.825 3.3 14.2V9.8q0-.625.437-1.063Q4.175 8.3 4.8 8.3h14.4q.625 0 1.063.437.437.438.437 1.063v4.4q0 .625-.437 1.062-.438.438-1.063.438ZM9.5 12h2.15V9H9.5q-.6 0-1.05.45Q8 9.9 8 10.5q0 .6.45 1.05.45.45 1.05.45Zm2.85 0h2.15q.6 0 1.05-.45.45-.45.45-1.05 0-.6-.45-1.05Q15.1 9 14.5 9h-2.15Z"/>
    </Icon>
  );
});

IconMaterialToolsLevelRoundedW100Filled.displayName = 'AmauiIconMaterialToolsLevelRoundedW100Filled';

export default IconMaterialToolsLevelRoundedW100Filled;
