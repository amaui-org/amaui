import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDestructionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DestructionW100'

      short_name='Destruction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-239h616v239H172Zm28-28h560v-183H200v183Zm68-271-128-75 193-33-53-192 162 116 99-173 33 196 192-53-115 162 92 52h-58l-76-43 88-123-146 40-25-149-75 132-123-88 40 146-146 25 100 60h-54Zm212 179Zm-21-179Z"/>
    </Icon>
  );
});

IconMaterialDestructionW100.displayName = 'AmauiIconMaterialDestructionW100';

export default IconMaterialDestructionW100;
