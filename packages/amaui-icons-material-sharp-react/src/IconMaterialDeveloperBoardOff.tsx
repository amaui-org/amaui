import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperBoardOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardOff'

      short_name='DeveloperBoardOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.825 3H20v4h2v2h-2v2h2v2h-2v2h2v2h-2.175L18 15.175V5H7.825ZM11 8.175 9.825 7H11ZM12.825 10 12 9.175V7h4v3ZM16 13.15 13.85 11H16ZM10.175 13Zm2.75-2.95ZM6 17v-4h5v4ZM3.2 3.175 5.025 5H4v14h14v-1.025l2 2V21H2V3.175Zm8.8 8.8 4 4V17h-4ZM7.025 7 11 10.975V12H6V7Zm13.45 16.3L.675 3.5 2.1 2.075l19.8 19.8Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardOff.displayName = 'AmauiIconMaterialDeveloperBoardOff';

export default IconMaterialDeveloperBoardOff;
