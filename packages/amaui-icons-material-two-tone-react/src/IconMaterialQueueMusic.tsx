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
      <g><rect fill="none" height="24" width="24"/></g><g><circle cx="16" cy="17" enableBackground="new" opacity=".3" r="1"/><path d="M3,10h12v2H3V10z M3,14h8v2H3V14z M3,6h12v2H3V6z M17,14.18C16.69,14.07,16.35,14,16,14c-1.66,0-3,1.34-3,3s1.34,3,3,3 s3-1.34,3-3V8h3V6h-5V14.18z"/></g>
    </Icon>
  );
});

IconMaterialQueueMusic.displayName = 'AmauiIconMaterialQueueMusic';

export default IconMaterialQueueMusic;
