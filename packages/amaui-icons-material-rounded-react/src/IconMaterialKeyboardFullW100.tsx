import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardFullW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardFullW100'

      short_name='KeyboardFull'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M192 844q-26 0-43-17t-17-43V368q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm-32-188h640V368q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v288Z"/>
    </Icon>
  );
});

IconMaterialKeyboardFullW100.displayName = 'AmauiIconMaterialKeyboardFullW100';

export default IconMaterialKeyboardFullW100;
