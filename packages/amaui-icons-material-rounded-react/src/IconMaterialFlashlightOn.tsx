import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashlightOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOn'

      short_name='FlashlightOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 22q-.825 0-1.412-.587Q8 20.825 8 20v-9L6 8V4q0-.825.588-1.413Q7.175 2 8 2h8q.825 0 1.413.587Q18 3.175 18 4v4l-2 3v9q0 .825-.587 1.413Q14.825 22 14 22Zm2-6.5q-.625 0-1.062-.438Q10.5 14.625 10.5 14t.438-1.062Q11.375 12.5 12 12.5t1.062.438q.438.437.438 1.062t-.438 1.062q-.437.438-1.062.438ZM8 5h8V4H8Zm8 2H8v.4l2 3V20h4v-9.6l2-3Zm-4 5Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOn.displayName = 'AmauiIconMaterialFlashlightOn';

export default IconMaterialFlashlightOn;
