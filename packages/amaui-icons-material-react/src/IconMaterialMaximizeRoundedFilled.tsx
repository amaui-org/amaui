import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMaximizeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaximizeRoundedFilled'
      short_name='Maximize'

      {...props}
    >
      <path d="M3.975 5Q3.55 5 3.275 4.712Q3 4.425 3 4Q3 3.575 3.288 3.287Q3.575 3 4 3H20.025Q20.45 3 20.725 3.287Q21 3.575 21 4Q21 4.425 20.712 4.712Q20.425 5 20 5Z"/>
    </Icon>
  )
});

export default IconMaterialMaximizeRoundedFilled;
