import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRespiratoryRateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RespiratoryRateW100Filled'

      short_name='RespiratoryRate'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M522 964q-12.5 0-21.25-8.75T492 934V814l49-126q3.36-8.846 11.013-14.423Q559.667 668 569 668h69v67l-47 46 19 19 56-55V562h28v182l55 56 19-19-46-47v-66h67q9.091 0 16.545 5.5Q813 679 817 687l51 127v120q0 12.5-8.75 21.25T838 964h-92q-12.5 0-21.25-8.75T716 934V806l-36-36-36 36v124q0 14.167-9.917 24.083Q624.167 964 610 964h-88ZM280 705l-68-135q-1.714-3.636-4.971-5.818Q203.771 562 200 562h-68V308h696v280h-54V482H586v106l-43 3-91-181q-1.667-3-5-4.5t-7-1.5q-3.972 0-7.583 1.5T427 410L280 705ZM132 844V590h59l76 153q2 4 5 5.5t7.696 1.5q4.304 0 7.304-1.5t5-5.5l147-295 78 153q-17 9-30 23.5T466 658l-54 141v45H132Z"/>
    </Icon>
  );
});

IconMaterialRespiratoryRateW100Filled.displayName = 'AmauiIconMaterialRespiratoryRateW100Filled';

export default IconMaterialRespiratoryRateW100Filled;
