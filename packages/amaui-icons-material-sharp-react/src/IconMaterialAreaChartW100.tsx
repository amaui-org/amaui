import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAreaChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AreaChartW100'

      short_name='AreaChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 18.7V9.6l3 2.25 4.95-6.975 4.3 3.425h3.15v10.4ZM8 17l4-5.5 7 5.45V9h-2.7l-3.9-3.125-4.95 6.95L5 11v3.6Z"/>
    </Icon>
  );
});

IconMaterialAreaChartW100.displayName = 'AmauiIconMaterialAreaChartW100';

export default IconMaterialAreaChartW100;
