import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksOneSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksOneSharpW700'
      short_name='LooksOne'

      {...props}
    >
      <path d="M11.625 17H14V7H9.625V9.375H11.625ZM21.85 21.85H2.15V2.15H21.85ZM5.3 18.7H18.7V5.3H5.3ZM5.3 5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialLooksOneSharpW700;
