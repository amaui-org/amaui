import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQueueMusicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueueMusicW100Filled'

      short_name='QueueMusic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 19.35q-.975 0-1.662-.687-.688-.688-.688-1.663 0-.975.688-1.663.687-.687 1.662-.687.425 0 .825.162.4.163.825.538v-8.7h3.7v1.4h-3V17q0 .975-.687 1.663-.688.687-1.663.687Zm-12.35-4v-.7h6.7v.7Zm0-4v-.7h10.7v.7Zm0-4v-.7h10.7v.7Z"/>
    </Icon>
  );
});

IconMaterialQueueMusicW100Filled.displayName = 'AmauiIconMaterialQueueMusicW100Filled';

export default IconMaterialQueueMusicW100Filled;
