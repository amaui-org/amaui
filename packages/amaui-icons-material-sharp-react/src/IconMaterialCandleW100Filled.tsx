import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCandleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CandleW100Filled'

      short_name='Candle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M483.154-659Q449-659 425.5-683.5T404-742q2-39 26-69.5t53-56.5q29 26 53 56.5t26 68.488q2 35.066-21.346 59.539T483.154-659ZM789-273q21 0 36-15t15-36.5q0-21.5-15-36.5t-36-15q-21 0-36 15t-15 36.5q0 21.5 15 36.5t36 15Zm-85 141H262q-37.5 0-63.75-26.25T172-222v-51h223v-301h176v301h158q-9-11-14-24.045-5-13.046-5-27.955 0-33.036 22.974-56.018 22.975-22.982 56-22.982Q822-404 845-381.018T868-325q0 32-21.5 55T794-245v23q0 37.5-26.25 63.75T704-132Z"/>
    </Icon>
  );
});

IconMaterialCandleW100Filled.displayName = 'AmauiIconMaterialCandleW100Filled';

export default IconMaterialCandleW100Filled;
