import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDermatologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DermatologyW100Filled'

      short_name='Dermatology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M162 884q-12.75 0-21.375-8.625T132 854V608.334Q132 583 149.625 565.5 167.25 548 192 548h164q4 0 9.5 12t10 22.5q4.5 10.5 7.5 13t3-17.5v-2q0 39.167 27.382 66.583Q440.765 670 479.882 670 519 670 546.5 642.583 574 615.167 574 576v2q0 20 3 17.5t7.5-13q4.5-10.5 10-22.5t9.5-12h164q24.75 0 42.375 17.625T828 608v245.935q0 13.065-8.625 21.565Q810.75 884 798 884H162Zm317.965-294Q474 590 470 585.975T466 576q0-102.548 23.5-202.274T590 206q5-3 10.5-3t9.5 4.5q4 4.5 3.5 10.5t-5.5 9q-74 63-94 157.274T494 576q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM229.814 712q11.186 0 18.686-7.314t7.5-18.5q0-11.186-7.314-18.686t-18.5-7.5Q219 660 211.5 667.314t-7.5 18.5q0 11.186 7.314 18.686t18.5 7.5Zm40 100q11.186 0 18.686-7.314t7.5-18.5q0-11.186-7.314-18.686t-18.5-7.5Q259 760 251.5 767.314t-7.5 18.5q0 11.186 7.314 18.686t18.5 7.5Zm460-100q11.186 0 18.686-7.314t7.5-18.5q0-11.186-7.314-18.686t-18.5-7.5Q719 660 711.5 667.314t-7.5 18.5q0 11.186 7.314 18.686t18.5 7.5Z"/>
    </Icon>
  );
});

IconMaterialDermatologyW100Filled.displayName = 'AmauiIconMaterialDermatologyW100Filled';

export default IconMaterialDermatologyW100Filled;
