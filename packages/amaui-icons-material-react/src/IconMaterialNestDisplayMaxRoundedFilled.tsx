import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestDisplayMaxRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDisplayMaxRoundedFilled'
      short_name='NestDisplayMax'

      {...props}
    >
      <path d="M12 10Q11.575 10 11.288 9.712Q11 9.425 11 9Q11 8.575 11.288 8.287Q11.575 8 12 8Q12.425 8 12.713 8.287Q13 8.575 13 9Q13 9.425 12.713 9.712Q12.425 10 12 10ZM12 19Q9.5 19 7.75 18.663Q6 18.325 6 17.85V17H4.175Q3.3 17 2.7 16.35Q2.1 15.7 2.175 14.825L2.85 6.825Q2.9 6.05 3.475 5.525Q4.05 5 4.85 5H19.15Q19.95 5 20.525 5.525Q21.1 6.05 21.15 6.825L21.825 14.825Q21.9 15.7 21.3 16.35Q20.7 17 19.825 17H18V17.85Q18 18.325 16.25 18.663Q14.5 19 12 19ZM4.175 15H19.825Q19.825 15 19.825 15Q19.825 15 19.825 15L19.15 7Q19.15 7 19.15 7Q19.15 7 19.15 7H4.85Q4.85 7 4.85 7Q4.85 7 4.85 7L4.175 15Q4.175 15 4.175 15Q4.175 15 4.175 15Z"/>
    </Icon>
  );
});

IconMaterialNestDisplayMaxRoundedFilled.displayName = 'AmauiIconMaterialNestDisplayMaxRoundedFilled';

export default IconMaterialNestDisplayMaxRoundedFilled;
