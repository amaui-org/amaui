import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsLevelSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsLevelSharpW100'
      short_name='ToolsLevel'

      {...props}
    >
      <path d="M4.8 15.7q-.625 0-1.063-.438Q3.3 14.825 3.3 14.2V9.8q0-.625.437-1.063Q4.175 8.3 4.8 8.3h14.4q.625 0 1.063.437.437.438.437 1.063v4.4q0 .625-.437 1.062-.438.438-1.063.438Zm0-.7h14.4q.35 0 .575-.225Q20 14.55 20 14.2V9.8q0-.35-.225-.575Q19.55 9 19.2 9h-3.1q.275.3.438.688.162.387.162.812 0 .875-.65 1.537-.65.663-1.55.663h-5q-.875 0-1.537-.663Q7.3 11.375 7.3 10.5q0-.425.163-.812Q7.625 9.3 7.9 9H4.8q-.35 0-.575.225Q4 9.45 4 9.8v4.4q0 .35.225.575Q4.45 15 4.8 15Zm4.7-3h2.15V9H9.5q-.6 0-1.05.45Q8 9.9 8 10.5q0 .6.45 1.05.45.45 1.05.45Zm2.85 0h2.15q.6 0 1.05-.45.45-.45.45-1.05 0-.6-.45-1.05Q15.1 9 14.5 9h-2.15Zm6.85 3H4 4.8 4h16-.8H20 19.2Z"/>
    </Icon>
  );
});

IconMaterialToolsLevelSharpW100.displayName = 'AmauiIconMaterialToolsLevelSharpW100';

export default IconMaterialToolsLevelSharpW100;
