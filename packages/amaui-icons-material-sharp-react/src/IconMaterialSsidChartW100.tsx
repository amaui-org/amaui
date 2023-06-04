import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSsidChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SsidChartW100'

      short_name='SsidChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.05 20.125 5.875 14.15 4.3 15.275v-.85l1.625-1.175 6.15 5.975 4.45-3.575H19.7v.7h-2.925Zm.025-8.975L7.7 6.775 4.3 9.25V8.4l3.45-2.55 4.375 4.375L19.7 4.75v.875Z"/>
    </Icon>
  );
});

IconMaterialSsidChartW100.displayName = 'AmauiIconMaterialSsidChartW100';

export default IconMaterialSsidChartW100;
