import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReleaseAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReleaseAlertFilled'

      short_name='ReleaseAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm136-220q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Z"/>
    </Icon>
  );
});

IconMaterialReleaseAlertFilled.displayName = 'AmauiIconMaterialReleaseAlertFilled';

export default IconMaterialReleaseAlertFilled;
