import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialZonePersonUrgentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZonePersonUrgentFilled'

      short_name='ZonePersonUrgent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 6V3q0-.825.588-1.413Q3.175 1 4 1h3v2H4v3Zm5 15H4q-.825 0-1.412-.587Q2 19.825 2 19v-3h2v3h3ZM20 6V3h-3V1h3q.825 0 1.413.587Q22 2.175 22 3v3Zm-6.5 2.5q-.825 0-1.412-.588Q11.5 7.325 11.5 6.5t.588-1.412Q12.675 4.5 13.5 4.5t1.413.588q.587.587.587 1.412t-.587 1.412q-.588.588-1.413.588Zm-.7 8.5h-4l1-5.1-1.8.7V16H6v-4.7l3.95-1.7q.875-.375 1.288-.487Q11.65 9 12 9q.525 0 .975.275.45.275.725.725l1 1.6q.275.425.6.787.325.363.75.663l-1.025 1.775q-.425-.275-.812-.613-.388-.337-.713-.712Zm2.2 5q-.275 0-.487-.137-.213-.138-.363-.363-.125-.225-.138-.488-.012-.262.113-.512l4-7q.15-.225.388-.375.237-.15.512-.15t.5.138q.225.137.35.387l4 7q.15.225.138.5-.013.275-.138.5-.15.225-.375.363-.225.137-.5.137Zm4-1q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35Q19.2 20 19 20q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15Zm-.5-2h1v-4h-1Z"/>
    </Icon>
  );
});

IconMaterialZonePersonUrgentFilled.displayName = 'AmauiIconMaterialZonePersonUrgentFilled';

export default IconMaterialZonePersonUrgentFilled;
