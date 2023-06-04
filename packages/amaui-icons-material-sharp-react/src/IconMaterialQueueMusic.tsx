import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQueueMusic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueueMusic'

      short_name='QueueMusic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 20q-1.25 0-2.125-.875T13 17q0-1.25.875-2.125T16 14q.275 0 .525.037.25.038.475.163V6h5v2h-3v9q0 1.25-.875 2.125T16 20ZM3 16v-2h8v2Zm0-4v-2h12v2Zm0-4V6h12v2Z"/>
    </Icon>
  );
});

IconMaterialQueueMusic.displayName = 'AmauiIconMaterialQueueMusic';

export default IconMaterialQueueMusic;
