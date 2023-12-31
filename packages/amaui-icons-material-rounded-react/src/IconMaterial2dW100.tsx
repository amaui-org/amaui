import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial2dW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='2dW100'

      short_name='2d'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M308-404v-62h92q12 0 20-8t8-20v-62q0-12-8-20t-20-8H294q-6 0-10 4t-4 10q0 6 4 10t10 4h106v62h-92q-12 0-20 8t-8 20v76q0 6 4 10t10 4h120q6 0 10-4t4-10q0-6-4-10t-10-4H308Zm218 28h109q19 0 32-13t13-32v-118q0-19-13-32t-32-13H526q-6 0-10 4t-4 10v180q0 6 4 10t10 4Zm14-28v-152h96q6 0 11 5t5 11v120q0 6-5 11t-11 5h-96ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterial2dW100.displayName = 'AmauiIconMaterial2dW100';

export default IconMaterial2dW100;
