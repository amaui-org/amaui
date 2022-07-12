import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpaceBarRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceBarRoundedFilled'
      short_name='SpaceBar'

      {...props}
    >
      <path d="M5 15Q4.575 15 4.287 14.712Q4 14.425 4 14V10Q4 9.575 4.287 9.287Q4.575 9 5 9Q5.425 9 5.713 9.287Q6 9.575 6 10V13H18V10Q18 9.575 18.288 9.287Q18.575 9 19 9Q19.425 9 19.712 9.287Q20 9.575 20 10V14Q20 14.425 19.712 14.712Q19.425 15 19 15Z"/>
    </Icon>
  )
});

export default IconMaterialSpaceBarRoundedFilled;
