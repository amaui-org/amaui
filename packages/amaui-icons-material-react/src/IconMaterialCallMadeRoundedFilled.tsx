import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMadeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMadeRoundedFilled'
      short_name='CallMade'

      {...props}
    >
      <path d="M4.7 19.3Q4.425 19.025 4.425 18.6Q4.425 18.175 4.7 17.9L15.6 7H10Q9.575 7 9.288 6.713Q9 6.425 9 6Q9 5.575 9.288 5.287Q9.575 5 10 5H18Q18.425 5 18.712 5.287Q19 5.575 19 6V14Q19 14.425 18.712 14.712Q18.425 15 18 15Q17.575 15 17.288 14.712Q17 14.425 17 14V8.4L6.075 19.325Q5.8 19.6 5.4 19.6Q5 19.6 4.7 19.3Z"/>
    </Icon>
  );
});

IconMaterialCallMadeRoundedFilled.displayName = 'AmauiIconMaterialCallMadeRoundedFilled';

export default IconMaterialCallMadeRoundedFilled;
