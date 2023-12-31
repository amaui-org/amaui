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
      <path d="M192-252q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h576q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-336q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v336q0 12 10 22t22 10Zm524-84h-86q-6 0-10 4t-4 10q0 6 4 10t10 4h84q13 0 21.5-8.5T744-366v-84q0-6-4-10t-10-4q-6 0-10 4t-4 10v86Zm-236-28q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26ZM244-596h86q6 0 10-4t4-10q0-6-4-10t-10-4h-84q-13 0-21.5 8.5T216-594v84q0 6 4 10t10 4q6 0 10-4t4-10v-86Zm-84 316v-400 400Z"/>
    </Icon>
  );
});

IconMaterialUniversalCurrencyAltW100.displayName = 'AmauiIconMaterialUniversalCurrencyAltW100';

export default IconMaterialUniversalCurrencyAltW100;
