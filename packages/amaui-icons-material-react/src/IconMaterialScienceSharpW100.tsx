import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScienceSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScienceSharpW100'
      short_name='Science'

      {...props}
    >
      <path d="M5 19.7Q4.575 19.7 4.375 19.3Q4.175 18.9 4.45 18.55L10.3 11.45V5H8.45V4.3H15.55V5H13.7V11.45L19.55 18.55Q19.825 18.875 19.625 19.288Q19.425 19.7 19 19.7ZM5 19H19L13 11.7V5H11V11.7ZM12 12Z"/>
    </Icon>
  );
});

export default IconMaterialScienceSharpW100;
