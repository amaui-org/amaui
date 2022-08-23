import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewArrayRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewArrayRoundedFilled'
      short_name='ViewArray'

      {...props}
    >
      <path d="M19 19Q18.575 19 18.288 18.712Q18 18.425 18 18V6Q18 5.575 18.288 5.287Q18.575 5 19 5H20Q20.425 5 20.712 5.287Q21 5.575 21 6V18Q21 18.425 20.712 18.712Q20.425 19 20 19ZM8 19Q7.575 19 7.287 18.712Q7 18.425 7 18V6Q7 5.575 7.287 5.287Q7.575 5 8 5H16Q16.425 5 16.712 5.287Q17 5.575 17 6V18Q17 18.425 16.712 18.712Q16.425 19 16 19ZM4 19Q3.575 19 3.288 18.712Q3 18.425 3 18V6Q3 5.575 3.288 5.287Q3.575 5 4 5H5Q5.425 5 5.713 5.287Q6 5.575 6 6V18Q6 18.425 5.713 18.712Q5.425 19 5 19Z"/>
    </Icon>
  );
});

IconMaterialViewArrayRoundedFilled.displayName = 'AmauiIconMaterialViewArrayRoundedFilled';

export default IconMaterialViewArrayRoundedFilled;
