import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMan4Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man4Sharp'
      short_name='Man4'

      {...props}
    >
      <path d="M10 22 8 7h8l-2 15Zm2-16q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6Z"/>
    </Icon>
  );
});

export default IconMaterialMan4Sharp;
