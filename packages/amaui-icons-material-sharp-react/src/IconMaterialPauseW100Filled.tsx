import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPauseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseW100Filled'

      short_name='Pause'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.65 17.7V6.3h4.05v11.4Zm-7.35 0V6.3h4.05v11.4Z"/>
    </Icon>
  );
});

IconMaterialPauseW100Filled.displayName = 'AmauiIconMaterialPauseW100Filled';

export default IconMaterialPauseW100Filled;
