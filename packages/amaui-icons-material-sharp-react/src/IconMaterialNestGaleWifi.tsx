import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestGaleWifi = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestGaleWifi'

      short_name='NestGaleWifi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m200-160-13-40h-21q-35 0-58.5-25T86-285l29-440q2-32 25-53.5t55-21.5h570q32 0 55 21.5t25 53.5l29 440q2 35-21.5 60T794-200h-21l-13 40H200Zm-16-400h592l-11-160H195l-11 160Zm-5 80-13 200h628l-13-200H179Zm301-20Z"/>
    </Icon>
  );
});

IconMaterialNestGaleWifi.displayName = 'AmauiIconMaterialNestGaleWifi';

export default IconMaterialNestGaleWifi;
