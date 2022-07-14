import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalRuleRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalRuleRoundedFilled'
      short_name='HorizontalRule'

      {...props}
    >
      <path d="M5 13Q4.575 13 4.287 12.712Q4 12.425 4 12Q4 11.575 4.287 11.287Q4.575 11 5 11H19Q19.425 11 19.712 11.287Q20 11.575 20 12Q20 12.425 19.712 12.712Q19.425 13 19 13Z"/>
    </Icon>
  );
});

export default IconMaterialHorizontalRuleRoundedFilled;
