import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlipRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipRoundedFilled'
      short_name='Flip'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H8Q8.425 3 8.713 3.287Q9 3.575 9 4Q9 4.425 8.713 4.712Q8.425 5 8 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19H8Q8.425 19 8.713 19.288Q9 19.575 9 20Q9 20.425 8.713 20.712Q8.425 21 8 21ZM12 23Q11.575 23 11.288 22.712Q11 22.425 11 22V2Q11 1.575 11.288 1.287Q11.575 1 12 1Q12.425 1 12.713 1.287Q13 1.575 13 2V22Q13 22.425 12.713 22.712Q12.425 23 12 23ZM19 5V3Q19.825 3 20.413 3.587Q21 4.175 21 5H19ZM19 13V11H21V13ZM19 21V19H21Q21 19.825 20.413 20.413Q19.825 21 19 21ZM19 9V7H21V9ZM19 17V15H21V17ZM15 21V19H17V21ZM15 5V3H17V5Z"/>
    </Icon>
  );
});

IconMaterialFlipRoundedFilled.displayName = 'AmauiIconMaterialFlipRoundedFilled';

export default IconMaterialFlipRoundedFilled;
