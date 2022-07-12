import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldSharpW700Filled'
      short_name='Shield'

      {...props}
    >
      <path d="M12 22.875Q8.15 21.925 5.65 18.562Q3.15 15.2 3.15 11.1V4.425L12 1.125L20.85 4.425V11.1Q20.85 15.2 18.35 18.562Q15.85 21.925 12 22.875Z"/>
    </Icon>
  )
});

export default IconMaterialShieldSharpW700Filled;
