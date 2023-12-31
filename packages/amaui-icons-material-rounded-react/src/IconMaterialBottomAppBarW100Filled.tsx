import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomAppBarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomAppBarW100Filled'

      short_name='BottomAppBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm248-168q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm-280-34h196q-14-42 12.5-78t71.5-36q45 0 71.5 36t12.5 78h196v-354q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v354Z"/>
    </Icon>
  );
});

IconMaterialBottomAppBarW100Filled.displayName = 'AmauiIconMaterialBottomAppBarW100Filled';

export default IconMaterialBottomAppBarW100Filled;
