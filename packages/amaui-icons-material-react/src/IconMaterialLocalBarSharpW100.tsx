import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalBarSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalBarSharpW100'
      short_name='LocalBar'

      {...props}
    >
      <path d="M7.3 20.35V19.65H11.65V12.75L4.75 5V4.3H19.25V5L12.35 12.75V19.65H16.7V20.35ZM7.45 7H16.55L18.35 5H5.65Z"/>
    </Icon>
  );
});

IconMaterialLocalBarSharpW100.displayName = 'AmauiIconMaterialLocalBarSharpW100';

export default IconMaterialLocalBarSharpW100;
