import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExitToAppW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExitToAppW100'

      short_name='ExitToApp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.25 15.35q-.125-.125-.125-.25t.125-.25l2.5-2.5h-8.6q-.15 0-.25-.1T3.8 12q0-.15.1-.25t.25-.1h8.6l-2.525-2.525q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l2.825 2.825q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-2.85 2.85q-.1.1-.225.1t-.25-.125ZM5.3 19.7q-.65 0-1.075-.425Q3.8 18.85 3.8 18.2v-2.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.5q0 .3.25.55.25.25.55.25h13.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q19 5 18.7 5H5.3q-.3 0-.55.25-.25.25-.25.55v2.5q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V5.8q0-.65.425-1.075Q4.65 4.3 5.3 4.3h13.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialExitToAppW100.displayName = 'AmauiIconMaterialExitToAppW100';

export default IconMaterialExitToAppW100;
