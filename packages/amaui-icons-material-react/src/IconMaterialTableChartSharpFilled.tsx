import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableChartSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartSharpFilled'
      short_name='TableChart'

      {...props}
    >
      <path d="M3 8V3H22V8ZM8 10V21H3V10ZM22 21H17V10H22ZM15 10V21H10V10Z"/>
    </Icon>
  );
});

export default IconMaterialTableChartSharpFilled;
