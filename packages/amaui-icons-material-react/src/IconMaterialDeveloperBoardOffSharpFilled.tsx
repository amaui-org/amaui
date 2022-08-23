import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeveloperBoardOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardOffSharpFilled'
      short_name='DeveloperBoardOff'

      {...props}
    >
      <path d="M2.1 2.075 21.9 21.875 20.475 23.3 18.175 21H2V4.825L0.675 3.5ZM22 17H19.825L16 13.15V11H13.85L12.825 10H16V7H12V9.175L11 8.175V7H9.825L5.825 3H20V7H22V9H20V11H22V13H20V15H22ZM12 14.825V17H14.175ZM6 13V17H11V13.825L10.175 13ZM6 8.825V12H9.175Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardOffSharpFilled.displayName = 'AmauiIconMaterialDeveloperBoardOffSharpFilled';

export default IconMaterialDeveloperBoardOffSharpFilled;
