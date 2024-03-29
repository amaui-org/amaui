import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDetectionAndZone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectionAndZone'

      short_name='DetectionAndZone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 7V4q0-.825.588-1.413Q3.175 2 4 2h3v2H4v3Zm5 15H4q-.825 0-1.412-.587Q2 20.825 2 20v-3h2v3h3Zm10 0v-2h3v-3h2v3q0 .825-.587 1.413Q20.825 22 20 22Zm3-15V4h-3V2h3q.825 0 1.413.587Q22 3.175 22 4v3Zm-6.5 2.5q-.825 0-1.412-.588Q11.5 8.325 11.5 7.5t.588-1.412Q12.675 5.5 13.5 5.5t1.413.588q.587.587.587 1.412t-.587 1.412q-.588.588-1.413.588Zm-.7 8.5h-4l1-5.1-1.8.7V17H6v-4.7l3.95-1.7q.875-.375 1.288-.487Q11.65 10 12 10q.525 0 .975.275.45.275.725.725l1 1.6q.65 1.05 1.762 1.725Q17.575 15 19 15v2q-1.65 0-3.087-.688-1.438-.687-2.413-1.812Z"/>
    </Icon>
  );
});

IconMaterialDetectionAndZone.displayName = 'AmauiIconMaterialDetectionAndZone';

export default IconMaterialDetectionAndZone;
