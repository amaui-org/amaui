import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLightningStandFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightningStandFilled'

      short_name='LightningStand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-600h-46q-11 0-17-10t0-20l124-217q4-7 11.5-5t7.5 10v162h46q11 0 17 10t0 20L459-433q-4 7-11.5 5t-7.5-10v-162Zm40 520q-137 0-208.5-35.5T200-220q0-29 13-53t39-41q-6 8-9.5 19.5T239-269q0 38 27.5 60t66 33q38.5 11 79.5 13.5t68 2.5q27 0 68-2.5t79.5-13.5q38.5-11 66-33t27.5-60q0-14-3.5-25.5T708-314q26 17 39 41t13 53q0 69-71.5 104.5T480-80Zm0-120q-92 0-146-21.5T280-280q0-35 55.5-57.5T480-360q92 0 146 21.5t54 58.5q0 37-54 58.5T480-200Z"/>
    </Icon>
  );
});

IconMaterialLightningStandFilled.displayName = 'AmauiIconMaterialLightningStandFilled';

export default IconMaterialLightningStandFilled;
