import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmojiFoodBeverage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFoodBeverage'

      short_name='EmojiFoodBeverage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21v-2h16v2Zm0-4V3h16q.825 0 1.413.587Q22 4.175 22 5v3q0 .825-.587 1.412Q20.825 10 20 10h-2v7Zm14-9h2V5h-2ZM6 15h10V5h-6v.4L12 7v5H7V7l2-1.6V5H6ZM9 5h1Zm2 5Z"/>
    </Icon>
  );
});

IconMaterialEmojiFoodBeverage.displayName = 'AmauiIconMaterialEmojiFoodBeverage';

export default IconMaterialEmojiFoodBeverage;
