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
      <path d="M16 19.35q-.975 0-1.662-.687-.688-.688-.688-1.663 0-.975.688-1.663.687-.687 1.662-.687.425 0 .825.162.4.163.825.538V7q0-.15.1-.25t.25-.1h2.65q.275 0 .488.2.212.2.212.5 0 .275-.212.487-.213.213-.488.213h-2.3V17q0 .975-.687 1.663-.688.687-1.663.687Zm-12-12q-.15 0-.25-.1T3.65 7q0-.15.1-.25t.25-.1h10q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h10q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialQueueMusicW100Filled.displayName = 'AmauiIconMaterialQueueMusicW100Filled';

export default IconMaterialQueueMusicW100Filled;
