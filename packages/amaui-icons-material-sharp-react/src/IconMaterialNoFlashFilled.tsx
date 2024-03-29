import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoFlashFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFlashFilled'

      short_name='NoFlash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.475 23.3-2.5-2.5V22H2V9.4h4.15l.2-.225L.675 3.5 2.1 2.075l19.8 19.8ZM9.25 12.075q-1.425.3-2.338 1.375Q6 14.525 6 16q0 1.65 1.175 2.825Q8.35 20 10 20q1.475 0 2.575-.925t1.375-2.325l-.012.025.012-.025ZM10 18q-.825 0-1.412-.587Q8 16.825 8 16q0-.825.588-1.413Q9.175 14 10 14t1.413.587Q12 15.175 12 16q0 .825-.587 1.413Q10.825 18 10 18Zm8-2.875L10.875 8h1.7l1.275 1.4H18ZM19 11V7h-1V2h4l-1.6 3.6H22Z"/>
    </Icon>
  );
});

IconMaterialNoFlashFilled.displayName = 'AmauiIconMaterialNoFlashFilled';

export default IconMaterialNoFlashFilled;
