import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovingBeds = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingBeds'

      short_name='MovingBeds'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V2h13v20Zm2-11.475q.45-.275.95-.4Q5.45 10 6 10h5q.55 0 1.05.125t.95.4V4H4ZM8.5 9q-.825 0-1.412-.588Q6.5 7.825 6.5 7t.588-1.412Q7.675 5 8.5 5t1.413.588Q10.5 6.175 10.5 7t-.587 1.412Q9.325 9 8.5 9Zm11 6.5-1.4-1.4 1.075-1.1H16v-2h3.175L18.1 9.9l1.4-1.4L23 12ZM4 20h9v-6q0-.825-.587-1.413Q11.825 12 11 12H6q-.825 0-1.412.587Q4 13.175 4 14Zm3.5-1h2v-2h2v-2h-2v-2h-2v2h-2v2h2ZM4 20h9Z"/>
    </Icon>
  );
});

IconMaterialMovingBeds.displayName = 'AmauiIconMaterialMovingBeds';

export default IconMaterialMovingBeds;
