import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeveloperBoardOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardOffSharp'
      short_name='DeveloperBoardOff'

      {...props}
    >
      <path d="M20.475 23.3 18.175 21H2V4.825L0.675 3.5L2.1 2.075L21.9 21.875ZM19.825 17 18 15.175V5H7.825L5.825 3H20V7H22V9H20V11H22V13H20V15H22V17ZM11 8.175 9.825 7H11ZM12.825 10 12 9.175V7H16V10ZM16 13.15 13.85 11H16ZM12.95 10.125ZM10.05 12.875ZM6 17V13H11V17ZM4 19H16.175L14.175 17H12V14.825L9.175 12H6V8.825L4 6.825Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardOffSharp.displayName = 'AmauiIconMaterialDeveloperBoardOffSharp';

export default IconMaterialDeveloperBoardOffSharp;
