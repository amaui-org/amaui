import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGlucoseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlucoseW100'

      short_name='Glucose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M602 924q-29 0-55.5-12T500 877L307 652q-8-10-7.5-22.5T311 609l1-1q15-11 34-12t35 10l91 58V256q0-6 4-10t10-4q6 0 10 4t4 10v405q0 18-15.5 26.5T454 686l-88-56q-8-5-18-5t-18 6l-3 2 196 229q17 20 33.5 27t45.5 7h132q44 0 75.5-31t31.5-75V516q0-6 4-10t10-4q6 0 10 4t4 10v274q0 56-39.5 95T734 924H602Zm-7-334V386q0-6 4-10t10-4q6 0 10 4t4 10v204h-28Zm123 0V436q0-6 4-10t10-4q6 0 10 4t4 10v154h-28ZM180 470q-48 0-81-32.5T66 358q0-29 11-49t59-74l21-24q9-11 22.5-11t22.5 11l21 24q48 55 59.5 74.5T294 358q0 46-33 79t-81 33Zm0-28q36 0 61-24.5t25-59.5q0-20-10.5-37.5T202 253l-23-25-21 25q-42 48-53 66t-11 39q0 35 25 59.5t61 24.5Zm0-84Zm621 538H523h278Z"/>
    </Icon>
  );
});

IconMaterialGlucoseW100.displayName = 'AmauiIconMaterialGlucoseW100';

export default IconMaterialGlucoseW100;
