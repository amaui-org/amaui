import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldSharpFilled'
      short_name='Shield'

      {...props}
    >
      <path d="M12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V5L12 2L20 5V11.1Q20 14.9 17.738 18.012Q15.475 21.125 12 22Z"/>
    </Icon>
  );
});

export default IconMaterialShieldSharpFilled;
