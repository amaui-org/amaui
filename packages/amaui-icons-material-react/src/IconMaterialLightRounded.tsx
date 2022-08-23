import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightRounded'
      short_name='Light'

      {...props}
    >
      <path d="M12 21Q10.35 21 9.175 19.825Q8 18.65 8 17H5Q4.175 17 3.587 16.413Q3 15.825 3 15Q3 11.5 5.3 8.963Q7.6 6.425 11 6.05V4Q11 3.575 11.288 3.287Q11.575 3 12 3Q12.425 3 12.713 3.287Q13 3.575 13 4V6.05Q16.4 6.425 18.7 8.963Q21 11.5 21 15Q21 15.825 20.413 16.413Q19.825 17 19 17H16Q16 18.65 14.825 19.825Q13.65 21 12 21ZM5 15H19Q19 12.1 16.95 10.05Q14.9 8 12 8Q9.1 8 7.05 10.05Q5 12.1 5 15ZM12 19Q12.825 19 13.413 18.413Q14 17.825 14 17H10Q10 17.825 10.588 18.413Q11.175 19 12 19ZM12 17Q12 17 12 17Q12 17 12 17Q12 17 12 17Q12 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialLightRounded.displayName = 'AmauiIconMaterialLightRounded';

export default IconMaterialLightRounded;
