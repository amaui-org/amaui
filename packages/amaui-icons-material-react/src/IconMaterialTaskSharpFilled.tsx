import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTaskSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskSharpFilled'
      short_name='Task'

      {...props}
    >
      <path d="M10.95 18 16.6 12.35 15.15 10.9 10.925 15.125 8.825 13.025 7.4 14.45ZM4 22V2H14L20 8V22ZM13 9H18L13 4Z"/>
    </Icon>
  );
});

IconMaterialTaskSharpFilled.displayName = 'AmauiIconMaterialTaskSharpFilled';

export default IconMaterialTaskSharpFilled;
