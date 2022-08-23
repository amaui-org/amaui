import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradingSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradingSharpFilled'
      short_name='Grading'

      {...props}
    >
      <path d="M3 9V7H21V9ZM3 13V11H21V13ZM3 17V15H12V17ZM3 21V19H12V21ZM16.425 20.975 13.6 18.15 15 16.75 16.425 18.175 19.6 15 21 16.4ZM3 5V3H21V5Z"/>
    </Icon>
  );
});

IconMaterialGradingSharpFilled.displayName = 'AmauiIconMaterialGradingSharpFilled';

export default IconMaterialGradingSharpFilled;
