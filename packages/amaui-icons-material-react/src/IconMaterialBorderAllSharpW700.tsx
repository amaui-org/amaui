import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderAllSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAllSharpW700'
      short_name='BorderAll'

      {...props}
    >
      <path d="M2.15 21.85V2.15H21.85V21.85ZM18.7 18.7V13H13V18.7ZM18.7 5.3H13V11H18.7ZM5.3 5.3V11H11V5.3ZM5.3 18.7H11V13H5.3Z"/>
    </Icon>
  )
});

export default IconMaterialBorderAllSharpW700;
