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
      <path d="M14.35 17.7q-.275 0-.487-.213-.213-.212-.213-.487V7q0-.275.213-.488.212-.212.487-.212H17q.275 0 .488.212.212.213.212.488v10q0 .275-.212.487-.213.213-.488.213ZM7 17.7q-.275 0-.487-.213Q6.3 17.275 6.3 17V7q0-.275.213-.488Q6.725 6.3 7 6.3h2.65q.275 0 .488.212.212.213.212.488v10q0 .275-.212.487-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialPauseW100Filled.displayName = 'AmauiIconMaterialPauseW100Filled';

export default IconMaterialPauseW100Filled;
