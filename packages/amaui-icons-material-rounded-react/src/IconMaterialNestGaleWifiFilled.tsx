import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestGaleWifiFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestGaleWifiFilled'

      short_name='NestGaleWifi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m200-160-13-40h-21q-35 0-58.5-25T86-285l13-197 762 2 13 195q2 35-21.5 60T794-200h-21l-13 40H200Zm-96-400 11-165q2-32 25-53.5t55-21.5h570q32 0 55 21.5t25 53.5l11 165H104Z"/>
    </Icon>
  );
});

IconMaterialNestGaleWifiFilled.displayName = 'AmauiIconMaterialNestGaleWifiFilled';

export default IconMaterialNestGaleWifiFilled;
