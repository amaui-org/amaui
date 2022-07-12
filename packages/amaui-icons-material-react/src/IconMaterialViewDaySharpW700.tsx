import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewDaySharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDaySharpW700'
      short_name='ViewDay'

      {...props}
    >
      <path d="M1.775 21.6V18.45H22.225V21.6ZM1.775 16.85V7.15H22.225V16.85ZM4.925 13.7H19.075V10.3H4.925ZM1.775 5.55V2.4H22.225V5.55ZM4.925 13.7V10.3V13.7Z"/>
    </Icon>
  )
});

export default IconMaterialViewDaySharpW700;
