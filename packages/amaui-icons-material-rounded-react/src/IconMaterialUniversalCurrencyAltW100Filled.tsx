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
      <path d="M192-252q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h576q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm524-112h-86q-6.067 0-10.033 3.953-3.967 3.954-3.967 10Q616-344 619.967-340q3.966 4 10.033 4h84q12.75 0 21.375-8.625T744-366v-84q0-6.067-3.953-10.033-3.954-3.967-10-3.967Q724-464 720-460.033q-4 3.966-4 10.033v86Zm-236-28q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26ZM244-596h86q6.067 0 10.033-3.953 3.967-3.954 3.967-10Q344-616 340.033-620q-3.966-4-10.033-4h-84q-12.75 0-21.375 8.625T216-594v84q0 6.067 3.953 10.033 3.954 3.967 10 3.967Q236-496 240-499.967q4-3.966 4-10.033v-86Z"/>
    </Icon>
  );
});

IconMaterialUniversalCurrencyAltW100Filled.displayName = 'AmauiIconMaterialUniversalCurrencyAltW100Filled';

export default IconMaterialUniversalCurrencyAltW100Filled;
