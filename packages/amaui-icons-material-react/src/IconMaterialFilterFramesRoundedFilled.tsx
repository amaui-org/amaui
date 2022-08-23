import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterFramesRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterFramesRoundedFilled'
      short_name='FilterFrames'

      {...props}
    >
      <path d="M4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V6Q2 5.175 2.588 4.588Q3.175 4 4 4H8L11.3 0.7Q11.575 0.425 12 0.425Q12.425 0.425 12.7 0.7L16 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM4 20H20Q20 20 20 20Q20 20 20 20V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V20Q4 20 4 20Q4 20 4 20ZM7 18Q6.575 18 6.287 17.712Q6 17.425 6 17V9Q6 8.575 6.287 8.287Q6.575 8 7 8H17Q17.425 8 17.712 8.287Q18 8.575 18 9V17Q18 17.425 17.712 17.712Q17.425 18 17 18Z"/>
    </Icon>
  );
});

IconMaterialFilterFramesRoundedFilled.displayName = 'AmauiIconMaterialFilterFramesRoundedFilled';

export default IconMaterialFilterFramesRoundedFilled;
