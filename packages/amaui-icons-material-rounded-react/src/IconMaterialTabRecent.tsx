import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabRecent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabRecent'

      short_name='TabRecent'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M720 1016q-83 0-141.5-58.5T520 816q0-83 58.5-141.5T720 616q83 0 141.5 58.5T920 816q0 83-58.5 141.5T720 1016Zm20-208v-92q0-8-6-14t-14-6q-8 0-14 6t-6 14v91q0 8 3 15.5t9 13.5l60 60q6 6 14 6t14-6q6-6 6-14t-6-14l-60-60Zm-580 88h292q-6-19-9-39t-3-41H160V336h360v120q0 17 11.5 28.5T560 496h240v52q22 7 42 16.5t38 22.5V336q0-33-23.5-56.5T800 256H160q-33 0-56.5 23.5T80 336v480q0 33 23.5 56.5T160 896Zm0-80V336v480Z"/>
    </Icon>
  );
});

IconMaterialTabRecent.displayName = 'AmauiIconMaterialTabRecent';

export default IconMaterialTabRecent;
