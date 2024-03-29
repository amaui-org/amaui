import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClimateMiniSplit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClimateMiniSplit'

      short_name='ClimateMiniSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 12V2h20v10Zm2 7v-2q1.25 0 2.125-.875T7 14h2q0 2.075-1.463 3.538Q6.075 19 4 19Zm16 0q-2.075 0-3.538-1.462Q15 16.075 15 14h2q0 1.25.875 2.125T20 17Zm-9 1v-6h2v6Zm7-10h2H4h14ZM6 10V6h12v4h-2V8H8v2Zm-2 0h16V4H4Z"/>
    </Icon>
  );
});

IconMaterialClimateMiniSplit.displayName = 'AmauiIconMaterialClimateMiniSplit';

export default IconMaterialClimateMiniSplit;
