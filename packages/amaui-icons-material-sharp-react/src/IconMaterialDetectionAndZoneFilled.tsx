import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDetectionAndZoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectionAndZoneFilled'

      short_name='DetectionAndZone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 7V2h5v2H4v3Zm0 15v-5h2v3h3v2Zm15 0v-2h3v-3h2v5Zm3-15V4h-3V2h5v5Zm-6.5 2.5q-.825 0-1.412-.588Q11.5 8.325 11.5 7.5t.588-1.412Q12.675 5.5 13.5 5.5t1.413.588q.587.587.587 1.412t-.587 1.412q-.588.588-1.413.588ZM8.8 18l1-5.1-1.8.7V17H6v-4.7l3.95-1.7q.875-.375 1.288-.487Q11.65 10 12 10q.525 0 .975.275.45.275.725.725l1 1.6q.65 1.05 1.762 1.725Q17.575 15 19 15v2q-1.65 0-3.087-.688-1.438-.687-2.413-1.812l-.7 3.5Z"/>
    </Icon>
  );
});

IconMaterialDetectionAndZoneFilled.displayName = 'AmauiIconMaterialDetectionAndZoneFilled';

export default IconMaterialDetectionAndZoneFilled;
