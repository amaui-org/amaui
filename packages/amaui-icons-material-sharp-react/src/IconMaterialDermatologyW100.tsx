import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDermatologyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DermatologyW100'

      short_name='Dermatology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 884V548h254v28q0 39.167 27.382 66.583Q440.765 670 479.882 670 519 670 546.5 642.583 574 615.167 574 576v-28h254v336H132Zm28-28h640V576H602q0 51-35.685 86.5T480 698q-50.63 0-86.315-35.685Q358 626.63 358 576H160v280Zm319.965-266Q474 590 470 585.975T466 576q0-102.548 23.5-202.274T590 206q5-3 10.5-3t9.5 4.5q4 4.5 3.5 10.5t-5.5 9q-74 63-94 157.274T494 576q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM229.814 712q11.186 0 18.686-7.314t7.5-18.5q0-11.186-7.314-18.686t-18.5-7.5Q219 660 211.5 667.314t-7.5 18.5q0 11.186 7.314 18.686t18.5 7.5Zm40 100q11.186 0 18.686-7.314t7.5-18.5q0-11.186-7.314-18.686t-18.5-7.5Q259 760 251.5 767.314t-7.5 18.5q0 11.186 7.314 18.686t18.5 7.5Zm460-100q11.186 0 18.686-7.314t7.5-18.5q0-11.186-7.314-18.686t-18.5-7.5Q719 660 711.5 667.314t-7.5 18.5q0 11.186 7.314 18.686t18.5 7.5ZM160 856h640-640Z"/>
    </Icon>
  );
});

IconMaterialDermatologyW100.displayName = 'AmauiIconMaterialDermatologyW100';

export default IconMaterialDermatologyW100;
