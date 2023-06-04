import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardCapslockBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCapslockBadgeW100'

      short_name='KeyboardCapslockBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M331 724h298q6 0 10-4t4-10q0-6-4-10t-10-4H331q-6 0-10 4t-4 10q0 6 4 10t10 4Zm149-252 135 134q4 4 9.5 3.5t9.5-4.5q4-4 4-9t-4-9L501 453q-9-9-21-9t-21 9L326 587q-4 4-3.5 9.5t4.5 9.5q4 4 9 4t9-4l135-134ZM232 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22V328q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCapslockBadgeW100.displayName = 'AmauiIconMaterialKeyboardCapslockBadgeW100';

export default IconMaterialKeyboardCapslockBadgeW100;
