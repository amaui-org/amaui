import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabMoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabMoveW100Filled'

      short_name='TabMove'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M232 884q-26 0-43-17t-17-43v-76q0-6 4-10t10-4q6 0 10 4t4 10v76q0 12 10 22t22 10h496q12 0 22-10t10-22V384H200v108q0 6-4 10t-10 4q-6 0-10-4t-4-10V328q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm297-250H186q-6 0-10-4t-4-10q0-6 4-10t10-4h343l-99-101q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l112 113q9 9 9 21t-9 21L449 754q-4 4-9.5 3.5T430 753q-4-4-4-9t4-9l99-101Z"/>
    </Icon>
  );
});

IconMaterialTabMoveW100Filled.displayName = 'AmauiIconMaterialTabMoveW100Filled';

export default IconMaterialTabMoveW100Filled;
