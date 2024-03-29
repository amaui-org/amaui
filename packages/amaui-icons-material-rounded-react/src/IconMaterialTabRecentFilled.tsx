import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabRecentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabRecentFilled'

      short_name='TabRecent'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M740 808v-92q0-8-6-14t-14-6q-8 0-14 6t-6 14v91q0 8 3 15.5t9 13.5l60 60q6 6 14 6t14-6q6-6 6-14t-6-14l-60-60ZM520 336v120q0 17 11.5 28.5T560 496h240V336H520Zm200 680q-83 0-141.5-58.5T520 816q0-83 58.5-141.5T720 616q83 0 141.5 58.5T920 816q0 83-58.5 141.5T720 1016ZM160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v251q-35-25-76.5-38T719 536q-116 0-197.5 82T440 816q0 21 3 41t9 39H160Z"/>
    </Icon>
  );
});

IconMaterialTabRecentFilled.displayName = 'AmauiIconMaterialTabRecentFilled';

export default IconMaterialTabRecentFilled;
