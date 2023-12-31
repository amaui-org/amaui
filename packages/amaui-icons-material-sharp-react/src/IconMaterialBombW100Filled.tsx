import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBombW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BombW100Filled'

      short_name='Bomb'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M361-112q-103 0-176-72.5T112-360q0-105 75.5-176.5T369-608q8 0 16.5.5T402-606l45-81 65 37 5-8q20-34 57-44t71 10l12 7-14 24-12-7q-24-14-51-7t-40 31l-4 8 65 36-47 82q23 38 39 78.5t16 85.5q0 102-72.5 172T361-112Zm387-502v-28h68v28h-68ZM586-788v-68h28v68h-28Zm162 40-19-19 48-49 19 20-48 48Z"/>
    </Icon>
  );
});

IconMaterialBombW100Filled.displayName = 'AmauiIconMaterialBombW100Filled';

export default IconMaterialBombW100Filled;
