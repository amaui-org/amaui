import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataBadgeW100'

      short_name='HMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M232 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22V328q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Zm184 294h192v146q0 6 4 10t10 4q6 0 10-4t4-10V416q0-6-4-10t-10-4q-6 0-10 4t-4 10v146H384V416q0-6-4-10t-10-4q-6 0-10 4t-4 10v320q0 6 4 10t10 4q6 0 10-4t4-10V590Z"/>
    </Icon>
  );
});

IconMaterialHMobiledataBadgeW100.displayName = 'AmauiIconMaterialHMobiledataBadgeW100';

export default IconMaterialHMobiledataBadgeW100;
