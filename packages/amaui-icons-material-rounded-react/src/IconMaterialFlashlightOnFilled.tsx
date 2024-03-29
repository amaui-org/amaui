import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashlightOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOnFilled'

      short_name='FlashlightOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 22q-.825 0-1.412-.587Q8 20.825 8 20v-9L6 8V7h12v1l-2 3v9q0 .825-.587 1.413Q14.825 22 14 22Zm2-6.5q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q12.625 12.5 12 12.5t-1.062.438Q10.5 13.375 10.5 14t.438 1.062q.437.438 1.062.438ZM6 5V4q0-.825.588-1.413Q7.175 2 8 2h8q.825 0 1.413.587Q18 3.175 18 4v1Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOnFilled.displayName = 'AmauiIconMaterialFlashlightOnFilled';

export default IconMaterialFlashlightOnFilled;
