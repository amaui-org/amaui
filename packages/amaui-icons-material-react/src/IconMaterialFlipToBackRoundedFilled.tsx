import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlipToBackRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToBackRoundedFilled'
      short_name='FlipToBack'

      {...props}
    >
      <path d="M7 9V7H9V9ZM7 13V11H9V13ZM7 5Q7 4.175 7.588 3.587Q8.175 3 9 3V5ZM11 17V15H13V17ZM19 5V3Q19.825 3 20.413 3.587Q21 4.175 21 5ZM11 5V3H13V5ZM9 17Q8.175 17 7.588 16.413Q7 15.825 7 15H9ZM19 13V11H21V13ZM19 9V7H21V9ZM19 17V15H21Q21 15.825 20.413 16.413Q19.825 17 19 17ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V8Q3 7.575 3.288 7.287Q3.575 7 4 7Q4.425 7 4.713 7.287Q5 7.575 5 8V19Q5 19 5 19Q5 19 5 19H16Q16.425 19 16.712 19.288Q17 19.575 17 20Q17 20.425 16.712 20.712Q16.425 21 16 21ZM15 5V3H17V5ZM15 17V15H17V17Z"/>
    </Icon>
  );
});

IconMaterialFlipToBackRoundedFilled.displayName = 'AmauiIconMaterialFlipToBackRoundedFilled';

export default IconMaterialFlipToBackRoundedFilled;
