import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStraightenRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenRoundedFilled'
      short_name='Straighten'

      {...props}
    >
      <path d="M4 18Q3.175 18 2.588 17.413Q2 16.825 2 16V8Q2 7.175 2.588 6.588Q3.175 6 4 6H7V11Q7 11.425 7.287 11.712Q7.575 12 8 12Q8.425 12 8.713 11.712Q9 11.425 9 11V6H11V11Q11 11.425 11.288 11.712Q11.575 12 12 12Q12.425 12 12.713 11.712Q13 11.425 13 11V6H15V11Q15 11.425 15.288 11.712Q15.575 12 16 12Q16.425 12 16.712 11.712Q17 11.425 17 11V6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V16Q22 16.825 21.413 17.413Q20.825 18 20 18Z"/>
    </Icon>
  );
});

IconMaterialStraightenRoundedFilled.displayName = 'AmauiIconMaterialStraightenRoundedFilled';

export default IconMaterialStraightenRoundedFilled;
