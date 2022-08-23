import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallToActionRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallToActionRounded'
      short_name='CallToAction'

      {...props}
    >
      <path d="M7 17H17Q17.425 17 17.712 16.712Q18 16.425 18 16V15Q18 14.575 17.712 14.287Q17.425 14 17 14H7Q6.575 14 6.287 14.287Q6 14.575 6 15V16Q6 16.425 6.287 16.712Q6.575 17 7 17ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialCallToActionRounded.displayName = 'AmauiIconMaterialCallToActionRounded';

export default IconMaterialCallToActionRounded;
