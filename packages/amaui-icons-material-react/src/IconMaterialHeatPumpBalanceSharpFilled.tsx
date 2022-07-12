import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeatPumpBalanceSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPumpBalanceSharpFilled'
      short_name='HeatPumpBalance'

      {...props}
    >
      <path d="M4 18.6h6v-10h2v10h6v-10h2.175L19 9.75l1.4 1.425L24 7.6 20.4 4 19 5.425 20.175 6.6H16v10h-2v-10H8v10H6v-10H4Zm-3 3v-10h22v10Z"/>
    </Icon>
  )
});

export default IconMaterialHeatPumpBalanceSharpFilled;
