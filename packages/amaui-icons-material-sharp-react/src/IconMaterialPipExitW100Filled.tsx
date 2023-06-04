import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPipExitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PipExitW100Filled'

      short_name='PipExit'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 844V548h320V308h376v536H132Zm561-114 20-20-187-186h141v-28H479v188h28V544l186 186ZM132 448V308h220v140H132Z"/>
    </Icon>
  );
});

IconMaterialPipExitW100Filled.displayName = 'AmauiIconMaterialPipExitW100Filled';

export default IconMaterialPipExitW100Filled;
