import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBlindFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlindFilled'

      short_name='Blind'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 5q-.825 0-1.412-.588Q9.5 3.825 9.5 3t.588-1.413Q10.675 1 11.5 1t1.413.587Q13.5 2.175 13.5 3q0 .825-.587 1.412Q12.325 5 11.5 5ZM11 22.5v-5l-1.775-2.55L9 18.5l-3 4-1.6-1.2L7 17.825V12.5q0-.85.125-1.7T7.5 9.1L6 9.95v3.55H4V8.8l5.4-3.075q.2-.125.425-.175.225-.05.475-.05.6 0 1.1.3.5.3.75.825l.775 1.675q.475 1.05 1.563 1.625 1.087.575 2.512.575v2h-.975l5.475 9.55-.85.5-5.95-10.325q-1-.325-1.812-.938-.813-.612-1.388-1.487-.275.8-.4 1.65-.125.85-.075 1.75L13 16v6.5Z"/>
    </Icon>
  );
});

IconMaterialBlindFilled.displayName = 'AmauiIconMaterialBlindFilled';

export default IconMaterialBlindFilled;
