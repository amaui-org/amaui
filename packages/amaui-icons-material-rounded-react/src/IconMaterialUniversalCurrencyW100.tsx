import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUniversalCurrencyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UniversalCurrencyW100'

      short_name='UniversalCurrency'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-434h-86q-6 0-10 4t-4 10q0 6 4 10t10 4h86q11 0 19.5-8.5T354-434v-62q0-11-8.5-19.5T326-524h-72v-62h86q6 0 10-4t4-10q0-6-4-10t-10-4H240q-6 0-10 4t-4 10v90q0 6 4 10t10 4h86v62Zm274-10q-59 0-91.5 17T476-378v7q0 6 4.5 10.5T491-356h218q6 0 10.5-4.5T724-371v-7q0-32-32.5-49T600-444Zm0-52q23 0 38.5-15.5T654-550q0-23-15.5-38.5T600-604q-23 0-38.5 15.5T546-550q0 23 15.5 38.5T600-496ZM192-252q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h576q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-336q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v336q0 12 10 22t22 10Zm-32 0v-400 400Z"/>
    </Icon>
  );
});

IconMaterialUniversalCurrencyW100.displayName = 'AmauiIconMaterialUniversalCurrencyW100';

export default IconMaterialUniversalCurrencyW100;
