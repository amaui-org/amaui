import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChess = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Chess'

      short_name='Chess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160h560v-80H200v80Zm132-160h296l-23-160H355l-23 160ZM120-80v-240h132l22-160H160v-80h640v80H686l22 160h132v240H120Zm151-480-71-320q33 25 68 47t77 22q40 0 73.5-20.5T480-880q28 28 61.5 48.5T615-811q42 0 77-22t68-47l-71 320h-82l39-173-7.5 1q-7.5 1-23.5 1-36 0-70.5-11T480-773q-29 20-62.5 31T349-731q-18 0-26.5-1l-8.5-1 39 173h-82Zm209 80Zm0-80Zm0 400Z"/>
    </Icon>
  );
});

IconMaterialChess.displayName = 'AmauiIconMaterialChess';

export default IconMaterialChess;
