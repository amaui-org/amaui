import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowFilled'

      short_name='Window'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 11V2h7q.825 0 1.413.587Q22 3.175 22 4v7Zm0 11v-9h9v7q0 .825-.587 1.413Q20.825 22 20 22ZM2 11V4q0-.825.588-1.413Q3.175 2 4 2h7v9Zm2 11q-.825 0-1.412-.587Q2 20.825 2 20v-7h9v9Z"/>
    </Icon>
  );
});

IconMaterialWindowFilled.displayName = 'AmauiIconMaterialWindowFilled';

export default IconMaterialWindowFilled;
