import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddChartW100Filled'

      short_name='AddChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.3 16.35H8v-5.7h-.7Zm3.7 0h.7v-8.7H11Zm3.7 0h.7v-2.7h-.7ZM3.65 19.7V4.3h10.9V5H4.35v14h14V8.8h.7v10.9Zm14-12v-2h-2V5h2V3h.7v2h2v.7h-2v2Z"/>
    </Icon>
  );
});

IconMaterialAddChartW100Filled.displayName = 'AmauiIconMaterialAddChartW100Filled';

export default IconMaterialAddChartW100Filled;
