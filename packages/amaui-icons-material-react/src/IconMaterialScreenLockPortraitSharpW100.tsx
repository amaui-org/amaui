import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenLockPortraitSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockPortraitSharpW100'
      short_name='ScreenLockPortrait'

      {...props}
    >
      <path d="M9.3 15.55V11.15H10.325V10.15Q10.325 9.425 10.812 8.938Q11.3 8.45 12.025 8.45Q12.75 8.45 13.238 8.938Q13.725 9.425 13.725 10.15V11.15H14.7V15.55ZM11.025 11.15H13.025V10.15Q13.025 9.725 12.738 9.438Q12.45 9.15 12.025 9.15Q11.6 9.15 11.312 9.438Q11.025 9.725 11.025 10.15ZM6.3 21.7V2.3H17.7V21.7ZM7 18.65H17V5.35H7ZM7 21H17V19.35H7ZM7 4.65H17V3H7ZM7 4.65V3V4.65ZM7 21V19.35V21Z"/>
    </Icon>
  );
});

IconMaterialScreenLockPortraitSharpW100.displayName = 'AmauiIconMaterialScreenLockPortraitSharpW100';

export default IconMaterialScreenLockPortraitSharpW100;
