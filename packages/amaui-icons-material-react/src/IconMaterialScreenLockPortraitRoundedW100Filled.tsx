import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenLockPortraitRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockPortraitRoundedW100Filled'
      short_name='ScreenLockPortrait'

      {...props}
    >
      <path d="M10.2 15.55Q9.825 15.55 9.562 15.287Q9.3 15.025 9.3 14.65V12.05Q9.3 11.675 9.562 11.412Q9.825 11.15 10.2 11.15H10.325V10.15Q10.325 9.425 10.812 8.938Q11.3 8.45 12.025 8.45Q12.75 8.45 13.238 8.938Q13.725 9.425 13.725 10.15V11.15H13.85Q14.2 11.15 14.45 11.412Q14.7 11.675 14.7 12.05V14.65Q14.7 15.025 14.438 15.287Q14.175 15.55 13.8 15.55ZM11.025 11.15H13.025V10.15Q13.025 9.725 12.738 9.438Q12.45 9.15 12.025 9.15Q11.6 9.15 11.312 9.438Q11.025 9.725 11.025 10.15ZM7 18.65H17V5.35H7ZM7.8 21.7Q7.15 21.7 6.725 21.275Q6.3 20.85 6.3 20.2V3.8Q6.3 3.15 6.725 2.725Q7.15 2.3 7.8 2.3H16.2Q16.85 2.3 17.275 2.725Q17.7 3.15 17.7 3.8V20.2Q17.7 20.85 17.275 21.275Q16.85 21.7 16.2 21.7Z"/>
    </Icon>
  );
});

IconMaterialScreenLockPortraitRoundedW100Filled.displayName = 'AmauiIconMaterialScreenLockPortraitRoundedW100Filled';

export default IconMaterialScreenLockPortraitRoundedW100Filled;
