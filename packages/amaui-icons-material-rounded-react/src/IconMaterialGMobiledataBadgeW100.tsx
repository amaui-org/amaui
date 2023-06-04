import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GMobiledataBadgeW100'

      short_name='GMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M232 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22V328q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Zm206 454h148q25 0 42.5-17.5T614 690v-98q0-13-8.5-21.5T584 562h-44q-6 0-10 4t-4 10q0 6 4 10t10 4h46v100q0 14-9 23t-23 9H406q-14 0-23-9t-9-23V462q0-14 9-23t23-9h208q-8-14-22-21t-30-7H406q-25 0-42.5 17.5T346 462v228q0 25 17.5 42.5T406 750Z"/>
    </Icon>
  );
});

IconMaterialGMobiledataBadgeW100.displayName = 'AmauiIconMaterialGMobiledataBadgeW100';

export default IconMaterialGMobiledataBadgeW100;
