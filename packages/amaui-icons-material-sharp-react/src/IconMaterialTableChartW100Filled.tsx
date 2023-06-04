import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartW100Filled'

      short_name='TableChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 8.65V4.3h16.4v4.35Zm4.2.7V19.7H4.3V9.35ZM20.7 19.7h-4.2V9.35h4.2ZM15.8 9.35V19.7H9.2V9.35Z"/>
    </Icon>
  );
});

IconMaterialTableChartW100Filled.displayName = 'AmauiIconMaterialTableChartW100Filled';

export default IconMaterialTableChartW100Filled;
