import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalMallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalMallW100Filled'

      short_name='LocalMall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.2 20.7H5.8q-.65 0-1.075-.425Q4.3 19.85 4.3 19.2V8.8q0-.65.425-1.075Q5.15 7.3 5.8 7.3h2.5q0-1.55 1.075-2.625T12 3.6q1.55 0 2.625 1.075T15.7 7.3h2.5q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425ZM9 7.3h6q0-1.25-.875-2.125T12 4.3q-1.25 0-2.125.875T9 7.3Zm3 5.4q1.45 0 2.562-1.025 1.113-1.025 1.113-2.375 0-.125-.1-.213-.1-.087-.25-.087-.125 0-.225.113-.1.112-.125.237-.125 1.125-.975 1.888-.85.762-2 .762t-2-.762q-.85-.763-.975-1.888Q9 9.225 8.9 9.113 8.8 9 8.675 9q-.15 0-.25.087-.1.088-.1.213 0 1.35 1.113 2.375Q10.55 12.7 12 12.7Z"/>
    </Icon>
  );
});

IconMaterialLocalMallW100Filled.displayName = 'AmauiIconMaterialLocalMallW100Filled';

export default IconMaterialLocalMallW100Filled;
