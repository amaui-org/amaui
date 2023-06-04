import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeMuteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteFilled'

      short_name='VolumeMute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 15V9h4l5-5v16l-5-5Z"/>
    </Icon>
  );
});

IconMaterialVolumeMuteFilled.displayName = 'AmauiIconMaterialVolumeMuteFilled';

export default IconMaterialVolumeMuteFilled;
