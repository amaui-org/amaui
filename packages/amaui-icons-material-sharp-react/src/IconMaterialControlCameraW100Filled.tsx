import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialControlCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControlCameraW100Filled'

      short_name='ControlCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13.7q-.725 0-1.212-.488Q10.3 12.725 10.3 12t.488-1.213Q11.275 10.3 12 10.3t1.213.487q.487.488.487 1.213 0 .725-.487 1.212-.488.488-1.213.488Zm0 6.5-3.35-3.35.5-.5L12 19.2l2.85-2.85.5.5Zm-4.85-4.85L3.8 12l3.35-3.35.5.5L4.8 12l2.85 2.85Zm2-7.7-.5-.5L12 3.8l3.35 3.35-.5.5L12 4.8Zm7.7 7.7-.5-.5L19.2 12l-2.85-2.85.5-.5L20.2 12Z"/>
    </Icon>
  );
});

IconMaterialControlCameraW100Filled.displayName = 'AmauiIconMaterialControlCameraW100Filled';

export default IconMaterialControlCameraW100Filled;
