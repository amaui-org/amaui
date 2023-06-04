import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuietTimeActiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeActiveW100Filled'

      short_name='QuietTimeActive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.2 17.225 6.8 4.825Q7.475 4 8.35 3.35q.875-.65 1.925-1.075 0 2.3.787 4.462.788 2.163 2.413 3.788Q15.1 12.15 17.2 13q2.1.85 4.4.85-.425 1.025-1.013 1.875-.587.85-1.387 1.5Zm.25 4.05-2.65-2.65q-.75.275-1.55.425-.8.15-1.65.15-1.825 0-3.425-.688-1.6-.687-2.8-1.887-1.2-1.2-1.887-2.8-.688-1.6-.688-3.425 0-.825.163-1.625.162-.8.437-1.55l-2.65-2.65.5-.5 16.7 16.7Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeActiveW100Filled.displayName = 'AmauiIconMaterialQuietTimeActiveW100Filled';

export default IconMaterialQuietTimeActiveW100Filled;
