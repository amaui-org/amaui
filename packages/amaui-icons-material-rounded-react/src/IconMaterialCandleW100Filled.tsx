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
      <path d="M483.154-659Q449-659 425.5-683.5T404-742.435Q406-774 423-800.5q17-26.5 39-47.5 5-5 10.5-7t10.5-2q5 0 10.5 2.5T504-848q22 21 39 47t19 58.101q2 35.019-21.346 59.459-23.346 24.44-57.5 24.44ZM789-273q21 0 36-15t15-36.5q0-21.5-15-36.5t-36-15q-21 0-36 15t-15 36.5q0 21.5 15 36.5t36 15Zm-85 141H262q-37.5 0-63.75-26.25T172-222v-21q0-12.75 8.625-21.375T202-273h193v-241q0-24.75 17.625-42.375T455-574h56q24.75 0 42.375 17.625T571-514v241h158q-9-11-14-24.045-5-13.046-5-27.955 0-33.036 22.974-56.018 22.975-22.982 56-22.982Q822-404 845-381.018T868-325q0 32-21.5 55T794-245v23q0 37.5-26.25 63.75T704-132Z"/>
    </Icon>
  );
});

IconMaterialCandleW100Filled.displayName = 'AmauiIconMaterialCandleW100Filled';

export default IconMaterialCandleW100Filled;
