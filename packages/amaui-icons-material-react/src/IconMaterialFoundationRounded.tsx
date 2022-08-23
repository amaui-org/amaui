import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFoundationRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoundationRounded'
      short_name='Foundation'

      {...props}
    >
      <path d="M6 20Q5.575 20 5.287 19.712Q5 19.425 5 19V17H4Q3.575 17 3.288 16.712Q3 16.425 3 16Q3 15.575 3.288 15.287Q3.575 15 4 15H5V12H3.3Q2.95 12 2.825 11.675Q2.7 11.35 2.975 11.125L11.325 3.6Q11.6 3.325 12 3.325Q12.4 3.325 12.675 3.6L21.025 11.125Q21.3 11.35 21.175 11.675Q21.05 12 20.7 12H19V15H20Q20.425 15 20.712 15.287Q21 15.575 21 16Q21 16.425 20.712 16.712Q20.425 17 20 17H19V19Q19 19.425 18.712 19.712Q18.425 20 18 20Q17.575 20 17.288 19.712Q17 19.425 17 19V17H13V19Q13 19.425 12.713 19.712Q12.425 20 12 20Q11.575 20 11.288 19.712Q11 19.425 11 19V17H7V19Q7 19.425 6.713 19.712Q6.425 20 6 20ZM7 15H11V6.6L7 10.2ZM13 15H17V10.2L13 6.6Z"/>
    </Icon>
  );
});

IconMaterialFoundationRounded.displayName = 'AmauiIconMaterialFoundationRounded';

export default IconMaterialFoundationRounded;
