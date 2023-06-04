import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLoginW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoginW100'

      short_name='Login'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.35 15.5q-.125-.125-.125-.25t.125-.25l2-2H4.9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8.45l-2.025-2.025q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l2.325 2.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-2.35 2.35q-.1.1-.225.1t-.25-.125Zm.7 5.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h5.9q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55-.25-.25-.55-.25h-5.9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h5.9q.65 0 1.075.425.425.425.425 1.075v13.7q0 .65-.425 1.075Q18.6 21 17.95 21Z"/>
    </Icon>
  );
});

IconMaterialLoginW100.displayName = 'AmauiIconMaterialLoginW100';

export default IconMaterialLoginW100;
