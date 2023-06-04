import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFindInPageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindInPageW100Filled'

      short_name='FindInPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V3.3h9.1l4.3 5.15v10.8l-4.55-4.6q.275-.375.412-.763.138-.387.138-.887 0-1.125-.787-1.913Q13.125 10.3 12 10.3t-1.912.787Q9.3 11.875 9.3 13t.788 1.912q.787.788 1.912.788.45 0 .838-.125.387-.125.812-.425l5.05 5.05v.5ZM12 15q-.825 0-1.412-.588Q10 13.825 10 13t.588-1.413Q11.175 11 12 11t1.413.587Q14 12.175 14 13q0 .825-.587 1.412Q12.825 15 12 15Z"/>
    </Icon>
  );
});

IconMaterialFindInPageW100Filled.displayName = 'AmauiIconMaterialFindInPageW100Filled';

export default IconMaterialFindInPageW100Filled;
