import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCodeSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeSharpW700'
      short_name='Code'

      {...props}
    >
      <path d="M16.375 18.825 14.125 16.6 18.725 12 14.15 7.425 16.375 5.2 23.2 12ZM7.625 18.8 0.8 12 7.625 5.175 9.875 7.4 5.275 12 9.85 16.575Z"/>
    </Icon>
  )
});

export default IconMaterialCodeSharpW700;
