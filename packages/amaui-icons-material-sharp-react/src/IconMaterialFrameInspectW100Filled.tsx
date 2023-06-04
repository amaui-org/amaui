import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFrameInspectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrameInspectW100Filled'

      short_name='FrameInspect'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 652q48 0 82-34t34-82q0-48-34-82t-82-34q-48 0-82 34t-34 82q0 48 34 82t82 34Zm204 108L532 647q-20 16-43 24.5t-49 8.5q-60.141 0-102.071-41.9Q296 596.199 296 536.1q0-60.1 41.9-102.1 41.901-42 102-42 60.1 0 102.1 41.929 42 41.93 42 102.071 0 26-8.5 49T551 628l113 112-20 20ZM172 884V696h28v160h160v28H172Zm428 0v-28h160V696h28v188H600ZM172 456V268h188v28H200v160h-28Zm588 0V296H600v-28h188v188h-28Z"/>
    </Icon>
  );
});

IconMaterialFrameInspectW100Filled.displayName = 'AmauiIconMaterialFrameInspectW100Filled';

export default IconMaterialFrameInspectW100Filled;
