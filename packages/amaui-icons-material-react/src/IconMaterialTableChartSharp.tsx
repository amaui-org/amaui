import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableChartSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartSharp'
      short_name='TableChart'

      {...props}
    >
      <path d="M3 21V3H22V21ZM5 8H20V5H5ZM8 10H5V19H8ZM17 10V19H20V10ZM15 10H10V19H15Z"/>
    </Icon>
  )
});

export default IconMaterialTableChartSharp;
