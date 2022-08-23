import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNorthSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthSharpFilled'
      short_name='North'

      {...props}
    >
      <path d="M11 22V5.825L6.4 10.4L5 9L12 2L19 9L17.6 10.425L13 5.825V22Z"/>
    </Icon>
  );
});

IconMaterialNorthSharpFilled.displayName = 'AmauiIconMaterialNorthSharpFilled';

export default IconMaterialNorthSharpFilled;
