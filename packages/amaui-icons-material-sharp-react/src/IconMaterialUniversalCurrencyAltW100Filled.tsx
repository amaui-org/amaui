import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUniversalCurrencyAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UniversalCurrencyAltW100Filled'

      short_name='UniversalCurrencyAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-252q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h576q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm424-84h128v-128h-28v100H616v28Zm-136-56q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26ZM216-496h28v-100h100v-28H216v128Z"/>
    </Icon>
  );
});

IconMaterialUniversalCurrencyAltW100Filled.displayName = 'AmauiIconMaterialUniversalCurrencyAltW100Filled';

export default IconMaterialUniversalCurrencyAltW100Filled;
