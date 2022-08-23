import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCompactRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactRoundedFilled'
      short_name='ViewCompact'

      {...props}
    >
      <path d="M22 10Q22 10.425 21.712 10.712Q21.425 11 21 11H3Q2.575 11 2.288 10.712Q2 10.425 2 10V5Q2 4.575 2.288 4.287Q2.575 4 3 4H21Q21.425 4 21.712 4.287Q22 4.575 22 5ZM11 20Q10.575 20 10.288 19.712Q10 19.425 10 19V14Q10 13.575 10.288 13.287Q10.575 13 11 13H21Q21.425 13 21.712 13.287Q22 13.575 22 14V19Q22 19.425 21.712 19.712Q21.425 20 21 20ZM3 20Q2.575 20 2.288 19.712Q2 19.425 2 19V14Q2 13.575 2.288 13.287Q2.575 13 3 13H7Q7.425 13 7.713 13.287Q8 13.575 8 14V19Q8 19.425 7.713 19.712Q7.425 20 7 20Z"/>
    </Icon>
  );
});

IconMaterialViewCompactRoundedFilled.displayName = 'AmauiIconMaterialViewCompactRoundedFilled';

export default IconMaterialViewCompactRoundedFilled;
