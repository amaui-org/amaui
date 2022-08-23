import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetailsSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetailsSharpW100'
      short_name='Details'

      {...props}
    >
      <path d="M4.2 19.7 12 5.675 19.8 19.7ZM5.4 19H11.65V7.75ZM12.35 19H18.6L12.35 7.75Z"/>
    </Icon>
  );
});

IconMaterialDetailsSharpW100.displayName = 'AmauiIconMaterialDetailsSharpW100';

export default IconMaterialDetailsSharpW100;
