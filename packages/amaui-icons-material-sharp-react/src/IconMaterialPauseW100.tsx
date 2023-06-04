import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPauseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseW100'

      short_name='Pause'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.65 17.7V6.3h2.8v11.4Zm-8.1 0V6.3h2.8v11.4Z"/>
    </Icon>
  );
});

IconMaterialPauseW100.displayName = 'AmauiIconMaterialPauseW100';

export default IconMaterialPauseW100;
