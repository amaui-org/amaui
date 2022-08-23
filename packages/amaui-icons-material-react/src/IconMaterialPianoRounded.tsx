import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPianoRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoRounded'
      short_name='Piano'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H8.25V14.5H8Q7.575 14.5 7.287 14.212Q7 13.925 7 13.5V5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM15.75 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H17V13.5Q17 13.925 16.712 14.212Q16.425 14.5 16 14.5H15.75ZM9.75 19H14.25V14.5H14Q13.575 14.5 13.288 14.212Q13 13.925 13 13.5V5H11V13.5Q11 13.925 10.713 14.212Q10.425 14.5 10 14.5H9.75Z"/>
    </Icon>
  );
});

IconMaterialPianoRounded.displayName = 'AmauiIconMaterialPianoRounded';

export default IconMaterialPianoRounded;
