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
      <path d="m786 910 28-28-74-74V696h-40v128l86 86ZM520 496h280V336H520v160Zm200 520q-83 0-141.5-58.5T520 816q0-83 58.5-141.5T720 616q83 0 141.5 58.5T920 816q0 83-58.5 141.5T720 1016ZM80 896V256h800v331q-35-25-76.5-38T719 536q-116 0-197.5 82T440 816q0 21 3 41t9 39H80Z"/>
    </Icon>
  );
});

IconMaterialTabRecentFilled.displayName = 'AmauiIconMaterialTabRecentFilled';

export default IconMaterialTabRecentFilled;
