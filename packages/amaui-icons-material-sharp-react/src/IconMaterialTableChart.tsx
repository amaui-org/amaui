import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChart'

      short_name='TableChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h19v18ZM5 8h15V5H5Zm3 2H5v9h3Zm9 0v9h3v-9Zm-2 0h-5v9h5Z"/>
    </Icon>
  );
});

IconMaterialTableChart.displayName = 'AmauiIconMaterialTableChart';

export default IconMaterialTableChart;
