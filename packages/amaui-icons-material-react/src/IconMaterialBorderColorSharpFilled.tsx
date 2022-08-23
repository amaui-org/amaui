import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderColorSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderColorSharpFilled'
      short_name='BorderColor'

      {...props}
    >
      <path d="M2 24V20H22V24ZM4 18V14.25L13.05 5.2L16.8 8.95L7.75 18ZM17.925 7.85 14.175 4.1 16.675 1.6 20.425 5.35Z"/>
    </Icon>
  );
});

IconMaterialBorderColorSharpFilled.displayName = 'AmauiIconMaterialBorderColorSharpFilled';

export default IconMaterialBorderColorSharpFilled;
