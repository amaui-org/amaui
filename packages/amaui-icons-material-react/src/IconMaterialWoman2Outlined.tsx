import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWoman2Outlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Woman2Outlined'
      short_name='Woman2'

      {...props}
    >
      <path d="M10.5 22v-6H7l3.05-7.7q.25-.6.775-.95T12 7q.65 0 1.175.35t.775.95L17 16h-3.5v6ZM12 6q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6Z"/>
    </Icon>
  )
});

export default IconMaterialWoman2Outlined;
