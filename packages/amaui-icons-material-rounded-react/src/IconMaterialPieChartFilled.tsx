import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPieChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PieChartFilled'

      short_name='PieChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 11V2.1q3.575.375 6.038 2.85Q21.5 7.425 21.9 11Zm-1.975 10.875q-3.8-.375-6.362-3.2Q2.1 15.85 2.1 12q0-3.875 2.563-6.7 2.562-2.825 6.362-3.2Zm1.975 0v-8.9h8.9q-.35 3.575-2.838 6.063-2.487 2.487-6.062 2.837Z"/>
    </Icon>
  );
});

IconMaterialPieChartFilled.displayName = 'AmauiIconMaterialPieChartFilled';

export default IconMaterialPieChartFilled;
