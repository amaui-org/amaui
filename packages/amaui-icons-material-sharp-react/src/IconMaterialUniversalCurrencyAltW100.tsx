import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUniversalCurrencyAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UniversalCurrencyAltW100'

      short_name='UniversalCurrencyAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-252q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h576q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-336q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v336q0 12 10 22t22 10Zm424-56h128v-128h-28v100H616v28Zm-136-56q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26ZM216-496h28v-100h100v-28H216v128Zm-56 216v-400 400Z"/>
    </Icon>
  );
});

IconMaterialUniversalCurrencyAltW100.displayName = 'AmauiIconMaterialUniversalCurrencyAltW100';

export default IconMaterialUniversalCurrencyAltW100;
