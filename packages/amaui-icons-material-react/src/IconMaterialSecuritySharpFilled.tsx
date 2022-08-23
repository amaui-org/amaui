import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSecuritySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecuritySharpFilled'
      short_name='Security'

      {...props}
    >
      <path d="M12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V5L12 2L20 5V11.1Q20 14.9 17.738 18.012Q15.475 21.125 12 22ZM12 19.9Q14.425 19.15 16.05 16.938Q17.675 14.725 17.95 12H12V4.125L6 6.375V11.1Q6 11.375 6 11.55Q6 11.725 6.05 12H12Z"/>
    </Icon>
  );
});

IconMaterialSecuritySharpFilled.displayName = 'AmauiIconMaterialSecuritySharpFilled';

export default IconMaterialSecuritySharpFilled;
