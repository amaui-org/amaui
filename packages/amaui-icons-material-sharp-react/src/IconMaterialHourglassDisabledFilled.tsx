import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHourglassDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassDisabledFilled'

      short_name='HourglassDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.475 23.3-1.3-1.3H4v-2h2v-3q0-1.525.713-2.863Q7.425 12.8 8.7 12q-.8-.5-1.362-1.2-.563-.7-.913-1.55L.675 3.5 2.1 2.075l19.8 19.8ZM15.05 12.15l-1.5-1.475q1.075-.45 1.762-1.437Q16 8.25 16 7V4H8v1.125L6.875 4l-2-2H20v2h-2v3q0 1.6-.775 2.975T15.05 12.15ZM8 20h8v-1.175L10.475 13.3q-1.1.45-1.787 1.45Q8 15.75 8 17Zm10 0Z"/>
    </Icon>
  );
});

IconMaterialHourglassDisabledFilled.displayName = 'AmauiIconMaterialHourglassDisabledFilled';

export default IconMaterialHourglassDisabledFilled;
