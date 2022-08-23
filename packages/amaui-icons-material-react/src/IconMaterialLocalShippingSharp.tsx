import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalShippingSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalShippingSharp'
      short_name='LocalShipping'

      {...props}
    >
      <path d="M6 20Q4.75 20 3.875 19.125Q3 18.25 3 17H1V4H17V8H20L23 12V17H21Q21 18.25 20.125 19.125Q19.25 20 18 20Q16.75 20 15.875 19.125Q15 18.25 15 17H9Q9 18.25 8.125 19.125Q7.25 20 6 20ZM6 18Q6.425 18 6.713 17.712Q7 17.425 7 17Q7 16.575 6.713 16.288Q6.425 16 6 16Q5.575 16 5.287 16.288Q5 16.575 5 17Q5 17.425 5.287 17.712Q5.575 18 6 18ZM3 15H3.8Q4.225 14.55 4.775 14.275Q5.325 14 6 14Q6.675 14 7.225 14.275Q7.775 14.55 8.2 15H15V6H3ZM18 18Q18.425 18 18.712 17.712Q19 17.425 19 17Q19 16.575 18.712 16.288Q18.425 16 18 16Q17.575 16 17.288 16.288Q17 16.575 17 17Q17 17.425 17.288 17.712Q17.575 18 18 18ZM17 13H21.25L19 10H17ZM9 10.5Q9 10.5 9 10.5Q9 10.5 9 10.5Q9 10.5 9 10.5Q9 10.5 9 10.5Z"/>
    </Icon>
  );
});

IconMaterialLocalShippingSharp.displayName = 'AmauiIconMaterialLocalShippingSharp';

export default IconMaterialLocalShippingSharp;
