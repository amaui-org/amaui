import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStayCurrentPortraitRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentPortraitRoundedW100Filled'
      short_name='StayCurrentPortrait'

      {...props}
    >
      <path d="M7 18.65H17V5.35H7ZM7.8 21.7Q7.15 21.7 6.725 21.275Q6.3 20.85 6.3 20.2V3.8Q6.3 3.15 6.725 2.725Q7.15 2.3 7.8 2.3H16.2Q16.85 2.3 17.275 2.725Q17.7 3.15 17.7 3.8V20.2Q17.7 20.85 17.275 21.275Q16.85 21.7 16.2 21.7Z"/>
    </Icon>
  );
});

IconMaterialStayCurrentPortraitRoundedW100Filled.displayName = 'AmauiIconMaterialStayCurrentPortraitRoundedW100Filled';

export default IconMaterialStayCurrentPortraitRoundedW100Filled;
