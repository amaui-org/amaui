import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpcoming = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Upcoming'

      short_name='Upcoming'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.6 10.8-1.4-1.4 3.55-3.55 1.4 1.4ZM11 8V3h2v5Zm-4.6 2.8L2.85 7.25l1.4-1.4L7.8 9.4ZM4 19h16v-5h-3.4q-.625 1.375-1.862 2.188Q13.5 17 12 17t-2.738-.812Q8.025 15.375 7.4 14H4Zm-2 2v-9h7q0 1.25.875 2.125T12 15q1.25 0 2.125-.875T15 12h7v9Zm2-2h16Z"/>
    </Icon>
  );
});

IconMaterialUpcoming.displayName = 'AmauiIconMaterialUpcoming';

export default IconMaterialUpcoming;
