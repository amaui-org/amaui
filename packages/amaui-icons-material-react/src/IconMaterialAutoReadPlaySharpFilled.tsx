import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoReadPlaySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPlaySharpFilled'
      short_name='AutoReadPlay'

      {...props}
    >
      <path d="M10 14 16 10 10 6ZM2 22V2H22V18H6Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPlaySharpFilled.displayName = 'AmauiIconMaterialAutoReadPlaySharpFilled';

export default IconMaterialAutoReadPlaySharpFilled;
