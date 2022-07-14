import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutputSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutputSharpFilled'
      short_name='Output'

      {...props}
    >
      <path d="M3 21V3H21V7H19V5H5V19H19V17H21V21ZM17 17 15.6 15.6 18.175 13H9V11H18.175L15.6 8.4L17 7L22 12Z"/>
    </Icon>
  );
});

export default IconMaterialOutputSharpFilled;
