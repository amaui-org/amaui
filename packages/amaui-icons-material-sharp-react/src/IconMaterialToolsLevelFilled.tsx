import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolsLevelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsLevelFilled'

      short_name='ToolsLevel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17q-.825 0-1.412-.587Q2 15.825 2 15V9q0-.825.588-1.413Q3.175 7 4 7h16q.825 0 1.413.587Q22 8.175 22 9v6q0 .825-.587 1.413Q20.825 17 20 17Zm5.5-5H11V9H9.5q-.6 0-1.05.45Q8 9.9 8 10.5q0 .6.45 1.05.45.45 1.05.45Zm3.5 0h1.5q.6 0 1.05-.45.45-.45.45-1.05 0-.6-.45-1.05Q15.1 9 14.5 9H13Z"/>
    </Icon>
  );
});

IconMaterialToolsLevelFilled.displayName = 'AmauiIconMaterialToolsLevelFilled';

export default IconMaterialToolsLevelFilled;
