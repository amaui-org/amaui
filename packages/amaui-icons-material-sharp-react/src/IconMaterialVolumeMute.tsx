import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeMute = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMute'

      short_name='VolumeMute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 15V9h4l5-5v16l-5-5Zm2-2h2.85L14 15.15v-6.3L11.85 11H9Zm2.5-1Z"/>
    </Icon>
  );
});

IconMaterialVolumeMute.displayName = 'AmauiIconMaterialVolumeMute';

export default IconMaterialVolumeMute;
