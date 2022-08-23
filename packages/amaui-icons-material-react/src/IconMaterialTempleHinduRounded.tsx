import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTempleHinduRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleHinduRounded'
      short_name='TempleHindu'

      {...props}
    >
      <path d="M4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V12Q2 11.575 2.288 11.287Q2.575 11 3 11Q3.425 11 3.713 11.287Q4 11.575 4 12V13H6L8.975 3.125V2Q8.975 1.575 9.262 1.287Q9.55 1 9.975 1Q10.4 1 10.688 1.287Q10.975 1.575 10.975 2V3H13V2Q13 1.575 13.288 1.287Q13.575 1 14 1Q14.425 1 14.713 1.287Q15 1.575 15 2V3L18 13H20V12Q20 11.575 20.288 11.287Q20.575 11 21 11Q21.425 11 21.712 11.287Q22 11.575 22 12V20Q22 20.825 21.413 21.413Q20.825 22 20 22H13V17H11V22ZM8.7 11H15.3L14.7 9H9.3ZM9.9 7H14.1L13.5 5H10.5ZM4 20H9V15H15V20H20V15H16.5L15.9 13H8.1L7.5 15H4ZM12 12.5Z"/>
    </Icon>
  );
});

IconMaterialTempleHinduRounded.displayName = 'AmauiIconMaterialTempleHinduRounded';

export default IconMaterialTempleHinduRounded;
