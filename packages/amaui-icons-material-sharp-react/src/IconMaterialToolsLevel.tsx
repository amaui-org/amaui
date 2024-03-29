import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolsLevel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsLevel'

      short_name='ToolsLevel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17q-.825 0-1.412-.587Q2 15.825 2 15V9q0-.825.588-1.413Q3.175 7 4 7h16q.825 0 1.413.587Q22 8.175 22 9v6q0 .825-.587 1.413Q20.825 17 20 17Zm0-2h16V9h-2.35q.175.35.263.725.087.375.087.775 0 1.425-1.038 2.462Q15.925 14 14.5 14h-5q-1.425 0-2.462-1.038Q6 11.925 6 10.5q0-.4.088-.775.087-.375.262-.725H4v6Zm5.5-3H11V9H9.5q-.6 0-1.05.45Q8 9.9 8 10.5q0 .6.45 1.05.45.45 1.05.45Zm3.5 0h1.5q.6 0 1.05-.45.45-.45.45-1.05 0-.6-.45-1.05Q15.1 9 14.5 9H13Zm7 3H4h16Z"/>
    </Icon>
  );
});

IconMaterialToolsLevel.displayName = 'AmauiIconMaterialToolsLevel';

export default IconMaterialToolsLevel;
