import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClimateMiniSplitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClimateMiniSplitFilled'

      short_name='ClimateMiniSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 12V2h20v10h-4V6H6v6Zm2 7v-2q1.25 0 2.125-.875T7 14h2q0 2.075-1.463 3.538Q6.075 19 4 19Zm4-7V8h8v4Zm3 8v-6h2v6Zm9-1q-2.075 0-3.538-1.462Q15 16.075 15 14h2q0 1.25.875 2.125T20 17Z"/>
    </Icon>
  );
});

IconMaterialClimateMiniSplitFilled.displayName = 'AmauiIconMaterialClimateMiniSplitFilled';

export default IconMaterialClimateMiniSplitFilled;
