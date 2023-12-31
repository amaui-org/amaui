import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToastW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToastW100'

      short_name='Toast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-266h400q6 0 10-4t4-10q0-6-4-10t-10-4H280q-6 0-10 4t-4 10q0 6 4 10t10 4Zm-48 94q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialToastW100.displayName = 'AmauiIconMaterialToastW100';

export default IconMaterialToastW100;
