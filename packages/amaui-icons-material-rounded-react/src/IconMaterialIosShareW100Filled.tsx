import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIosShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IosShareW100Filled'

      short_name='IosShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.35q-.15 0-.25-.1t-.1-.25V4.55L9.625 6.575q-.1.1-.225.1t-.25-.125q-.125-.125-.125-.25t.125-.25l2.325-2.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l2.35 2.35q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-2-2V15q0 .15-.1.25t-.25.1ZM6.8 21.7q-.65 0-1.075-.425Q5.3 20.85 5.3 20.2v-9.4q0-.65.425-1.075Q6.15 9.3 6.8 9.3h1.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H6.8q-.3 0-.55.25-.25.25-.25.55v9.4q0 .3.25.55.25.25.55.25h10.4q.3 0 .55-.25.25-.25.25-.55v-9.4q0-.3-.25-.55-.25-.25-.55-.25h-1.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.5q.65 0 1.075.425.425.425.425 1.075v9.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialIosShareW100Filled.displayName = 'AmauiIconMaterialIosShareW100Filled';

export default IconMaterialIosShareW100Filled;
