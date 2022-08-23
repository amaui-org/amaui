import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStickyNote2RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2RoundedFilled'
      short_name='StickyNote2'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V15L15 21ZM11 14Q11.425 14 11.713 13.712Q12 13.425 12 13Q12 12.575 11.713 12.287Q11.425 12 11 12H8Q7.575 12 7.287 12.287Q7 12.575 7 13Q7 13.425 7.287 13.712Q7.575 14 8 14ZM16 10Q16.425 10 16.712 9.712Q17 9.425 17 9Q17 8.575 16.712 8.287Q16.425 8 16 8H8Q7.575 8 7.287 8.287Q7 8.575 7 9Q7 9.425 7.287 9.712Q7.575 10 8 10ZM14 19 19 14H15Q14.575 14 14.288 14.287Q14 14.575 14 15Z"/>
    </Icon>
  );
});

IconMaterialStickyNote2RoundedFilled.displayName = 'AmauiIconMaterialStickyNote2RoundedFilled';

export default IconMaterialStickyNote2RoundedFilled;
