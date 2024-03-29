import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsRunFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRunFilled'

      short_name='DirectionsRun'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.5 5.5q-.825 0-1.412-.588Q11.5 4.325 11.5 3.5t.588-1.413Q12.675 1.5 13.5 1.5t1.413.587q.587.588.587 1.413 0 .825-.587 1.412-.588.588-1.413.588ZM13 23v-6l-2.1-2-1 4.4L3 18l.4-2 4.8 1 1.6-8.1-1.8.7V13H6V8.3l3.95-1.7q.875-.375 1.288-.488Q11.65 6 12 6q.525 0 .975.275.45.275.725.725l1 1.6q.65 1.05 1.762 1.725Q17.575 11 19 11v2q-1.65 0-3.087-.688-1.438-.687-2.413-1.812l-.6 3 2.1 2V23Z"/>
    </Icon>
  );
});

IconMaterialDirectionsRunFilled.displayName = 'AmauiIconMaterialDirectionsRunFilled';

export default IconMaterialDirectionsRunFilled;
