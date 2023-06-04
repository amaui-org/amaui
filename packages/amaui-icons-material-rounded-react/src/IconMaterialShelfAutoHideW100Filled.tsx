import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShelfAutoHideW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelfAutoHideW100Filled'

      short_name='ShelfAutoHide'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M232 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm248-108q11 0 19.5-8.5T508 748q0-11-8.5-19.5T480 720q-11 0-19.5 8.5T452 748q0 11 8.5 19.5T480 776Zm-160 0q11 0 19.5-8.5T348 748q0-11-8.5-19.5T320 720q-11 0-19.5 8.5T292 748q0 11 8.5 19.5T320 776Zm320 0q11 0 19.5-8.5T668 748q0-11-8.5-19.5T640 720q-11 0-19.5 8.5T612 748q0 11 8.5 19.5T640 776Z"/>
    </Icon>
  );
});

IconMaterialShelfAutoHideW100Filled.displayName = 'AmauiIconMaterialShelfAutoHideW100Filled';

export default IconMaterialShelfAutoHideW100Filled;
