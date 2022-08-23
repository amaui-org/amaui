import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStayCurrentPortraitRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentPortraitRounded'
      short_name='StayCurrentPortrait'

      {...props}
    >
      <path d="M7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM7 18H17V6H7ZM7 20V21Q7 21 7 21Q7 21 7 21H17Q17 21 17 21Q17 21 17 21V20ZM7 4H17V3Q17 3 17 3Q17 3 17 3H7Q7 3 7 3Q7 3 7 3ZM7 3Q7 3 7 3Q7 3 7 3V4V3Q7 3 7 3Q7 3 7 3ZM7 21Q7 21 7 21Q7 21 7 21V20V21Q7 21 7 21Q7 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialStayCurrentPortraitRounded.displayName = 'AmauiIconMaterialStayCurrentPortraitRounded';

export default IconMaterialStayCurrentPortraitRounded;
