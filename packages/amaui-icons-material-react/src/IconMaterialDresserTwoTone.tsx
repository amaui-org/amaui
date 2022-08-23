import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDresserTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DresserTwoTone'
      short_name='Dresser'

      {...props}
    >
      <path d="M4 21V5q0-.825.588-1.413Q5.175 3 6 3h12q.825 0 1.413.587Q20 4.175 20 5v16h-2v-2H6v2Zm2-10h5V5H6Zm7-4h5V5h-5Zm0 4h5V9h-5Zm-3 5h4v-2h-4Zm-4-3v4h12v-4Zm0 4v-4 4Z"/>
    </Icon>
  );
});

IconMaterialDresserTwoTone.displayName = 'AmauiIconMaterialDresserTwoTone';

export default IconMaterialDresserTwoTone;
