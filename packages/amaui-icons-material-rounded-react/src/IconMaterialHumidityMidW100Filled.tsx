import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHumidityMidW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityMidW100Filled'

      short_name='HumidityMid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.2q-2.8 0-4.75-1.912-1.95-1.913-1.95-4.663 0-1.425.538-2.575.537-1.15 1.412-2.1L12 4.3l4.75 4.65q.875.95 1.413 2.137.537 1.188.537 2.538 0 2.75-1.95 4.663Q14.8 20.2 12 20.2Zm0-14.9L7.75 9.5q-.75.725-1.188 1.613-.437.887-.537 1.937h11.95q-.1-1.05-.537-1.937Q17 10.225 16.25 9.5Z"/>
    </Icon>
  );
});

IconMaterialHumidityMidW100Filled.displayName = 'AmauiIconMaterialHumidityMidW100Filled';

export default IconMaterialHumidityMidW100Filled;
