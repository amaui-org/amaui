import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDescriptionSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DescriptionSharpFilled'
      short_name='Description'

      {...props}
    >
      <path d="M8 18H16V16H8ZM8 14H16V12H8ZM4 22V2H14L20 8V22ZM13 9H18L13 4Z"/>
    </Icon>
  );
});

IconMaterialDescriptionSharpFilled.displayName = 'AmauiIconMaterialDescriptionSharpFilled';

export default IconMaterialDescriptionSharpFilled;
