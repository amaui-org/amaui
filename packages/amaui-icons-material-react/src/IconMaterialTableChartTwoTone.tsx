import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableChartTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartTwoTone'
      short_name='TableChart'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 5h15v3H5zm12 5h3v9h-3zm-7 0h5v9h-5zm-5 0h3v9H5z" opacity=".3"/><path d="M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 19H5v-9h3v9zm7 0h-5v-9h5v9zm5 0h-3v-9h3v9zm0-11H5V5h15v3z"/>
    </Icon>
  );
});

IconMaterialTableChartTwoTone.displayName = 'AmauiIconMaterialTableChartTwoTone';

export default IconMaterialTableChartTwoTone;
