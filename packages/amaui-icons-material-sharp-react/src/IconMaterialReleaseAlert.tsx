import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReleaseAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReleaseAlert'

      short_name='ReleaseAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm0 200q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Z"/>
    </Icon>
  );
});

IconMaterialReleaseAlert.displayName = 'AmauiIconMaterialReleaseAlert';

export default IconMaterialReleaseAlert;
