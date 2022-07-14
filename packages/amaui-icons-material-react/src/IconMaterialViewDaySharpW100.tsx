import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewDaySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDaySharpW100'
      short_name='ViewDay'

      {...props}
    >
      <path d="M4.3 18.4V17.7H19.7V18.4ZM4.3 14.7V9.3H19.7V14.7ZM5 14H19V10H5ZM4.3 6.3V5.6H19.7V6.3ZM5 14V10V14Z"/>
    </Icon>
  );
});

export default IconMaterialViewDaySharpW100;
