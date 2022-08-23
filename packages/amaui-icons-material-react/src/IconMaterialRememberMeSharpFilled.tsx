import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRememberMeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RememberMeSharpFilled'
      short_name='RememberMe'

      {...props}
    >
      <path d="M5 23V1H19V23ZM7 15.2Q8.125 14.625 9.387 14.312Q10.65 14 12 14Q13.35 14 14.613 14.312Q15.875 14.625 17 15.2V6H7ZM12 13Q13.25 13 14.125 12.125Q15 11.25 15 10Q15 8.75 14.125 7.875Q13.25 7 12 7Q10.75 7 9.875 7.875Q9 8.75 9 10Q9 11.25 9.875 12.125Q10.75 13 12 13Z"/>
    </Icon>
  );
});

IconMaterialRememberMeSharpFilled.displayName = 'AmauiIconMaterialRememberMeSharpFilled';

export default IconMaterialRememberMeSharpFilled;
