import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHiking = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hiking'

      short_name='Hiking'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.5 5.5q-.825 0-1.412-.588Q11.5 4.325 11.5 3.5t.588-1.413Q12.675 1.5 13.5 1.5t1.413.587q.587.588.587 1.413 0 .825-.587 1.412-.588.588-1.413.588ZM7 23l3.075-15.55q.15-.725.675-1.088Q11.275 6 11.85 6q.575 0 1.063.25.487.25.787.75l1 1.6q.45.725 1.163 1.312.712.588 1.637.863V9H19v14h-1.5V12.85q-1.2-.275-2.225-.875-1.025-.6-1.775-1.475l-.6 3 2.1 2V23h-2v-6l-2.1-2-1.8 8Zm.425-9.875 1.35-6.85-3.125-.6-1.325 6.875Z"/>
    </Icon>
  );
});

IconMaterialHiking.displayName = 'AmauiIconMaterialHiking';

export default IconMaterialHiking;
