import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialZonePersonAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZonePersonAlertFilled'

      short_name='ZonePersonAlert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18v-3h2v3h3v2Zm4.8-4 1-5.1-1.8.7V15H6v-4.7l3.95-1.7q.875-.375 1.288-.487Q11.65 8 12 8q.525 0 .975.275.45.275.725.725l1 1.6.2.3q.1.15.225.275-1.225.8-2.025 2.063Q12.3 14.5 12.075 16Zm4.7-8.5q-.825 0-1.412-.588Q11.5 6.325 11.5 5.5t.588-1.413Q12.675 3.5 13.5 3.5t1.413.587q.587.588.587 1.413 0 .825-.587 1.412-.588.588-1.413.588ZM2 5V2q0-.825.588-1.413Q3.175 0 4 0h3v2H4v3Zm18 0V2h-3V0h3q.825 0 1.413.587Q22 1.175 22 2v3Zm-1 17q-2.075 0-3.537-1.462Q14 19.075 14 17q0-2.075 1.463-3.538Q16.925 12 19 12t3.538 1.462Q24 14.925 24 17q0 2.075-1.462 3.538Q21.075 22 19 22Zm-.5-4h1v-4h-1Zm.5 2q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35Q19.2 19 19 19q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15Z"/>
    </Icon>
  );
});

IconMaterialZonePersonAlertFilled.displayName = 'AmauiIconMaterialZonePersonAlertFilled';

export default IconMaterialZonePersonAlertFilled;
