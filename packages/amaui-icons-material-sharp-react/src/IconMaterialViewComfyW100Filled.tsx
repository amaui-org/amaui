import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewComfyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfyW100Filled'

      short_name='ViewComfy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 11.65V5.3h17.4v6.35Zm5.9 7.05v-6.35h11.5v6.35Zm-5.9 0v-6.35h5.2v6.35Z"/>
    </Icon>
  );
});

IconMaterialViewComfyW100Filled.displayName = 'AmauiIconMaterialViewComfyW100Filled';

export default IconMaterialViewComfyW100Filled;
