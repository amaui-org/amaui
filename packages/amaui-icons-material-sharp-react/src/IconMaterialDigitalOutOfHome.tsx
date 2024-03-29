import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDigitalOutOfHome = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DigitalOutOfHome'

      short_name='DigitalOutOfHome'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 23V3q0-.825.588-1.413Q1.175 1 2 1h7q.825 0 1.413.587Q11 2.175 11 3v20H9v-2H2v2Zm2-4h7V3H2Zm2-6V9l3.5 2Zm13-6q-.825 0-1.412-.588Q15 5.825 15 5t.588-1.413Q16.175 3 17 3t1.413.587Q19 4.175 19 5q0 .825-.587 1.412Q17.825 7 17 7Zm-1.5 16v-6.6l2.15-2.05-.525-2.6q-.975 1.125-2.362 1.688Q13.375 14 12 14v-2q1.2 0 2.325-.575 1.125-.575 1.85-1.75l.75-1.225q.375-.625 1.1-.85.725-.225 1.375.05L24 9.6v4.9h-2v-3.575l-1.425-.6L23 23h-2.05l-1.525-7.15-1.925 1.8V23Z"/>
    </Icon>
  );
});

IconMaterialDigitalOutOfHome.displayName = 'AmauiIconMaterialDigitalOutOfHome';

export default IconMaterialDigitalOutOfHome;
