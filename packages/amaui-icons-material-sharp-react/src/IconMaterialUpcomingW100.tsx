import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpcomingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpcomingW100'

      short_name='Upcoming'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.35 10.65-.5-.5L19.5 7.5l.5.5Zm-5.7-2.6v-3.7h.7v3.7Zm-5 2.6L4 8l.5-.5 2.65 2.65ZM4 19h16v-5h-3.4q-.65 1.375-1.875 2.188Q13.5 17 12 17t-2.725-.812Q8.05 15.375 7.4 14H4Zm-.7.7v-6.4H8q.425 1.35 1.525 2.175 1.1.825 2.475.825 1.425 0 2.525-.825 1.1-.825 1.475-2.175h4.7v6.4ZM4 19h16Z"/>
    </Icon>
  );
});

IconMaterialUpcomingW100.displayName = 'AmauiIconMaterialUpcomingW100';

export default IconMaterialUpcomingW100;
