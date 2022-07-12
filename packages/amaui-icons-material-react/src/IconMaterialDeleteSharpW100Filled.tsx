import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeleteSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteSharpW100Filled'
      short_name='Delete'

      {...props}
    >
      <path d="M6.3 19.7V6H5.3V5.3H9V4.6H15V5.3H18.7V6H17.7V19.7ZM10.05 17H10.75V8H10.05ZM13.25 17H13.95V8H13.25Z"/>
    </Icon>
  )
});

export default IconMaterialDeleteSharpW100Filled;
