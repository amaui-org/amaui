import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Window'

      short_name='Window'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 22H4q-.825 0-1.412-.587Q2 20.825 2 20V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v16q0 .825-.587 1.413Q20.825 22 20 22Zm-9-11V4H4v7Zm0 2H4v7h7Zm2 0v7h7v-7Zm0-2h7V4h-7Z"/>
    </Icon>
  );
});

IconMaterialWindow.displayName = 'AmauiIconMaterialWindow';

export default IconMaterialWindow;
