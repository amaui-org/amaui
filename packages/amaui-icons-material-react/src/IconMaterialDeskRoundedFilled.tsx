import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeskRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeskRoundedFilled'
      short_name='Desk'

      {...props}
    >
      <path d="M2 17V7Q2 6.575 2.288 6.287Q2.575 6 3 6H21Q21.425 6 21.712 6.287Q22 6.575 22 7V17Q22 17.425 21.712 17.712Q21.425 18 21 18Q20.8 18 20.613 17.925Q20.425 17.85 20.288 17.712Q20.15 17.575 20.075 17.387Q20 17.2 20 17V16H16V17Q16 17.2 15.925 17.387Q15.85 17.575 15.713 17.712Q15.575 17.85 15.388 17.925Q15.2 18 15 18Q14.575 18 14.288 17.712Q14 17.425 14 17V8H4V17Q4 17.425 3.713 17.712Q3.425 18 3 18Q2.575 18 2.288 17.712Q2 17.425 2 17ZM16 10H20V8H16ZM16 14H20V12H16Z"/>
    </Icon>
  );
});

IconMaterialDeskRoundedFilled.displayName = 'AmauiIconMaterialDeskRoundedFilled';

export default IconMaterialDeskRoundedFilled;
