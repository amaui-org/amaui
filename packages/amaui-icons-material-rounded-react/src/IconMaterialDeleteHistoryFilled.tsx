import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeleteHistoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteHistoryFilled'

      short_name='DeleteHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-126 0-223-76.5T131-392q-4-15 6-27.5t27-14.5q16-2 29 6t18 24q24 90 99 147t170 57q11 0 20.5-.5T520-203v81q-10 1-19.5 1.5t-20.5.5Zm260-103-56 55q-11 11-27.5 11.5T628-168q-11-11-11-28t11-28l56-56-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l56 56 56-56q11-11 27.5-11.5T852-392q11 11 11 28t-11 28l-55 56 55 56q11 11 11.5 27.5T852-168q-11 11-28 11t-28-11l-56-55ZM480-760q-69 0-129 32t-101 88h70q17 0 28.5 11.5T360-600q0 17-11.5 28.5T320-560H160q-17 0-28.5-11.5T120-600v-160q0-17 11.5-28.5T160-800q17 0 28.5 11.5T200-760v54q51-64 124.5-99T480-840q150 0 255 105t105 255h-80q0-117-81.5-198.5T480-760Zm54 390-82-82q-6-6-9-13.5t-3-15.5v-159q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640v144l56 56-42 70Z"/>
    </Icon>
  );
});

IconMaterialDeleteHistoryFilled.displayName = 'AmauiIconMaterialDeleteHistoryFilled';

export default IconMaterialDeleteHistoryFilled;
