import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchAccessShortcutRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccessShortcutRounded'
      short_name='SwitchAccessShortcut'

      {...props}
    >
      <path d="M8 11 7.05 8.95 5 8 7.05 7.05 8 5 8.95 7.05 11 8 8.95 8.95ZM8 21 7.05 18.95 5 18 7.05 17.05 8 15 8.95 17.05 11 18 8.95 18.95ZM5 15 4.375 13.625 3 13 4.375 12.375 5 11 5.625 12.375 7 13 5.625 13.625ZM17.45 21.25Q14.975 19.8 13.488 17.325Q12 14.85 12 12Q12 9.65 12.938 7.6Q13.875 5.55 15.45 4H13Q12.575 4 12.288 3.712Q12 3.425 12 3Q12 2.575 12.288 2.287Q12.575 2 13 2H18Q18.425 2 18.712 2.287Q19 2.575 19 3V8Q19 8.425 18.712 8.712Q18.425 9 18 9Q17.575 9 17.288 8.712Q17 8.425 17 8V5.275Q15.65 6.6 14.825 8.35Q14 10.1 14 12Q14 14.4 15.3 16.425Q16.6 18.45 18.625 19.625Q18.775 19.725 18.888 19.938Q19 20.15 19 20.4Q18.95 21 18.488 21.3Q18.025 21.6 17.45 21.25Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccessShortcutRounded.displayName = 'AmauiIconMaterialSwitchAccessShortcutRounded';

export default IconMaterialSwitchAccessShortcutRounded;
