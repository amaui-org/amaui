import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsWalkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsWalkFilled'

      short_name='DirectionsWalk'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.5 5.5q-.825 0-1.412-.588Q11.5 4.325 11.5 3.5t.588-1.413Q12.675 1.5 13.5 1.5t1.413.587q.587.588.587 1.413 0 .825-.587 1.412-.588.588-1.413.588ZM7 23 9.8 8.9 8 9.6V13H6V8.3l5.05-2.15q.725-.3 1.475-.063.75.238 1.175.913l1 1.6q.65 1.05 1.762 1.725Q17.575 11 19 11v2q-1.65 0-3.087-.688-1.438-.687-2.413-1.812l-.6 3 2.1 2V23h-2v-6l-2.1-2-1.8 8Z"/>
    </Icon>
  );
});

IconMaterialDirectionsWalkFilled.displayName = 'AmauiIconMaterialDirectionsWalkFilled';

export default IconMaterialDirectionsWalkFilled;
