import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSsidChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SsidChartFilled'

      short_name='SsidChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 21-6.2-6L3 17v-2.45l3-2.15 6.125 5.95L16.3 15H21v2h-4Zm0-9L7.625 7.625 3 11V8.525L7.825 5 12.2 9.375 21 3v2.475Z"/>
    </Icon>
  );
});

IconMaterialSsidChartFilled.displayName = 'AmauiIconMaterialSsidChartFilled';

export default IconMaterialSsidChartFilled;
