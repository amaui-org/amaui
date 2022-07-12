import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompareSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareSharpW100'
      short_name='Compare'

      {...props}
    >
      <path d="M11.3 22V19.7H4.3V4.3H11.3V2H12V22ZM5 18H11.3V10.45ZM14 19.7V12L19 18V5H14V4.3H19.7V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialCompareSharpW100;
