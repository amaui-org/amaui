import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStreamAppsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StreamAppsFilled'

      short_name='StreamApps'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M560 776V416h360v280H640l-80 80Zm-360 240V136h560v240h-80v-40H280v480h400v-40h80v240H200Z"/>
    </Icon>
  );
});

IconMaterialStreamAppsFilled.displayName = 'AmauiIconMaterialStreamAppsFilled';

export default IconMaterialStreamAppsFilled;
