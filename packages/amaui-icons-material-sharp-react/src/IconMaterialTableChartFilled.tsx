import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartFilled'

      short_name='TableChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 8V3h19v5Zm5 2v11H3V10Zm14 11h-5V10h5Zm-7-11v11h-5V10Z"/>
    </Icon>
  );
});

IconMaterialTableChartFilled.displayName = 'AmauiIconMaterialTableChartFilled';

export default IconMaterialTableChartFilled;
