import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInFullRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInFullRoundedFilled'
      short_name='OpenInFull'

      {...props}
    >
      <path d="M4 21Q3.575 21 3.288 20.712Q3 20.425 3 20V14Q3 13.575 3.288 13.287Q3.575 13 4 13Q4.425 13 4.713 13.287Q5 13.575 5 14V17.6L17.6 5H14Q13.575 5 13.288 4.712Q13 4.425 13 4Q13 3.575 13.288 3.287Q13.575 3 14 3H20Q20.425 3 20.712 3.287Q21 3.575 21 4V10Q21 10.425 20.712 10.712Q20.425 11 20 11Q19.575 11 19.288 10.712Q19 10.425 19 10V6.4L6.4 19H10Q10.425 19 10.713 19.288Q11 19.575 11 20Q11 20.425 10.713 20.712Q10.425 21 10 21Z"/>
    </Icon>
  );
});

IconMaterialOpenInFullRoundedFilled.displayName = 'AmauiIconMaterialOpenInFullRoundedFilled';

export default IconMaterialOpenInFullRoundedFilled;
