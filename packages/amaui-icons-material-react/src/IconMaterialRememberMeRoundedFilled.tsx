import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRememberMeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RememberMeRoundedFilled'
      short_name='RememberMe'

      {...props}
    >
      <path d="M7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM7 15.2Q8.125 14.625 9.387 14.312Q10.65 14 12 14Q13.35 14 14.613 14.312Q15.875 14.625 17 15.2V6H7ZM12 13Q13.25 13 14.125 12.125Q15 11.25 15 10Q15 8.75 14.125 7.875Q13.25 7 12 7Q10.75 7 9.875 7.875Q9 8.75 9 10Q9 11.25 9.875 12.125Q10.75 13 12 13Z"/>
    </Icon>
  );
});

IconMaterialRememberMeRoundedFilled.displayName = 'AmauiIconMaterialRememberMeRoundedFilled';

export default IconMaterialRememberMeRoundedFilled;
