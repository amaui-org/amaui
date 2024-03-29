import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness4Filled'

      short_name='Brightness4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.625 20h-2.65q-.825 0-1.413-.587-.587-.588-.587-1.413v-2.65l-1.9-1.925Q1.5 12.85 1.5 12q0-.85.575-1.425l1.9-1.925V6q0-.825.587-1.412Q5.15 4 5.975 4h2.65l1.925-1.9q.575-.575 1.425-.575.85 0 1.425.575L15.325 4h2.65q.825 0 1.413.588.587.587.587 1.412v2.65l1.9 1.925q.575.575.575 1.425 0 .85-.575 1.425l-1.9 1.925V18q0 .825-.587 1.413Q18.8 20 17.975 20h-2.65L13.4 21.9q-.575.575-1.425.575-.85 0-1.425-.575Zm3.575-3q2.125 0 3.6-1.463 1.475-1.462 1.475-3.537T15.8 8.475q-1.475-1.45-3.6-1.45-.325 0-.587.037-.263.038-.488.088-.15.05-.237.162-.088.113-.088.238 0 .05.225.4 1.025.675 1.55 1.762Q13.1 10.8 13.1 12q0 1.275-.55 2.35Q12 15.425 11 16.075q-.075.05-.225.375 0 .15.1.262.1.113.25.163.325.075.588.1.262.025.487.025Z"/>
    </Icon>
  );
});

IconMaterialBrightness4Filled.displayName = 'AmauiIconMaterialBrightness4Filled';

export default IconMaterialBrightness4Filled;
