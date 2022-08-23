import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStayCurrentPortraitRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentPortraitRoundedW100'
      short_name='StayCurrentPortrait'

      {...props}
    >
      <path d="M7.8 21.7Q7.15 21.7 6.725 21.275Q6.3 20.85 6.3 20.2V3.8Q6.3 3.15 6.725 2.725Q7.15 2.3 7.8 2.3H16.2Q16.85 2.3 17.275 2.725Q17.7 3.15 17.7 3.8V20.2Q17.7 20.85 17.275 21.275Q16.85 21.7 16.2 21.7ZM7 18.65H17V5.35H7ZM7 19.35V20.2Q7 20.5 7.25 20.75Q7.5 21 7.8 21H16.2Q16.5 21 16.75 20.75Q17 20.5 17 20.2V19.35ZM7 4.65H17V3.8Q17 3.5 16.75 3.25Q16.5 3 16.2 3H7.8Q7.5 3 7.25 3.25Q7 3.5 7 3.8ZM7 3Q7 3 7 3.225Q7 3.45 7 3.8V4.65V3.8Q7 3.45 7 3.225Q7 3 7 3ZM7 21Q7 21 7 20.775Q7 20.55 7 20.2V19.35V20.2Q7 20.55 7 20.775Q7 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialStayCurrentPortraitRoundedW100.displayName = 'AmauiIconMaterialStayCurrentPortraitRoundedW100';

export default IconMaterialStayCurrentPortraitRoundedW100;
