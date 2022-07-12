import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewDaySharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDaySharpW700Filled'
      short_name='ViewDay'

      {...props}
    >
      <path d="M1.775 21.6V18.45H22.225V21.6ZM1.775 16.85V7.15H22.225V16.85ZM1.775 5.55V2.4H22.225V5.55Z"/>
    </Icon>
  )
});

export default IconMaterialViewDaySharpW700Filled;
