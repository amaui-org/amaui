import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGlucoseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlucoseW100Filled'

      short_name='Glucose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M602 924q-28.99 0-55.495-12T500 877L307 652q-8-10-7.5-22.5T311 609l1-1q15.143-11.471 34.071-12.235Q365 595 381 606l91 58V256q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v334h95V386q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v204h95V436q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v154h95v-74q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v274q0 56-39.656 95T734 924H602ZM180.41 470Q132 470 99 437.5T66 358q0-29 11-49t59-74l21-24q9-11 22.5-11t22.5 11l21 24q48 55 59.5 74.5T294 358q0 46.261-33 79.13Q228 470 180.41 470Z"/>
    </Icon>
  );
});

IconMaterialGlucoseW100Filled.displayName = 'AmauiIconMaterialGlucoseW100Filled';

export default IconMaterialGlucoseW100Filled;
