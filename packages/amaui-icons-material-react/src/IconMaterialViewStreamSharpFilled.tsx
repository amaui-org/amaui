import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewStreamSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewStreamSharpFilled'
      short_name='ViewStream'

      {...props}
    >
      <path d="M3 19Q3 19 3 19Q3 19 3 19V13H21V19Q21 19 21 19Q21 19 21 19ZM3 11V5Q3 5 3 5Q3 5 3 5H21Q21 5 21 5Q21 5 21 5V11Z"/>
    </Icon>
  );
});

export default IconMaterialViewStreamSharpFilled;
