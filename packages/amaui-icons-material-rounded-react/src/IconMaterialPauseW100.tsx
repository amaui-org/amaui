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
      <path d="M14.35 17.7q-.275 0-.487-.213-.213-.212-.213-.487V7q0-.275.213-.488.212-.212.487-.212H17q.275 0 .488.212.212.213.212.488v10q0 .275-.212.487-.213.213-.488.213ZM7 17.7q-.275 0-.487-.213Q6.3 17.275 6.3 17V7q0-.275.213-.488Q6.725 6.3 7 6.3h2.65q.275 0 .488.212.212.213.212.488v10q0 .275-.212.487-.213.213-.488.213Zm7.35-.7H17V7h-2.65ZM7 17h2.65V7H7ZM7 7v10Zm7.35 0v10Z"/>
    </Icon>
  );
});

IconMaterialPauseW100.displayName = 'AmauiIconMaterialPauseW100';

export default IconMaterialPauseW100;
