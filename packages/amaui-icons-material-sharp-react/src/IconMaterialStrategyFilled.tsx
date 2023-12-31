import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStrategyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrategyFilled'

      short_name='Strategy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-80 320-220v-280l140-82v242h200v-242l140 82v280L560-80ZM220-520 80-600v-160l140-80 140 80v160l-140 80Zm300 120v-480h360l-80 120 80 120H600v240h-80Z"/>
    </Icon>
  );
});

IconMaterialStrategyFilled.displayName = 'AmauiIconMaterialStrategyFilled';

export default IconMaterialStrategyFilled;
