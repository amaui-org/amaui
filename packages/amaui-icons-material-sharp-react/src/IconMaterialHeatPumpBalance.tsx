import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeatPumpBalance = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPumpBalance'

      short_name='HeatPumpBalance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 18.6H4v-12h2v10h2v-10h6v10h2v-10h4.175L19 5.425 20.4 4 24 7.6l-3.6 3.575L19 9.75l1.175-1.15H18v10h-6v-10h-2Zm-9 3v-10h22v10Zm2-2h18v-6H3Zm18-6H3Z"/>
    </Icon>
  );
});

IconMaterialHeatPumpBalance.displayName = 'AmauiIconMaterialHeatPumpBalance';

export default IconMaterialHeatPumpBalance;
