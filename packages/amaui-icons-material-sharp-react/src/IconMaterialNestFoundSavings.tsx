import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestFoundSavings = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestFoundSavings'

      short_name='NestFoundSavings'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q2.15 0 3.575-1.5Q17 12 17 10V5h-5Q9.975 5 8.488 6.425 7 7.85 7 10q0 .75.213 1.425.212.675.587 1.25l-.4.4q-.3.3-.3.7 0 .4.3.7.3.3.7.3.4 0 .7-.3l.375-.35q.6.425 1.313.65Q11.2 15 12 15Zm0-2q-.375 0-.712-.1-.338-.1-.638-.25l2.6-2.6q.3-.3.3-.713 0-.412-.3-.712t-.7-.3q-.4 0-.7.3l-2.6 2.6q-.125-.275-.188-.588Q9 10.325 9 10q0-1.3.9-2.15Q10.8 7 12 7h3v3q0 1.25-.875 2.125T12 13Zm0 9-3-3H3V1h18v18h-6Zm-7-5h4.8l2.2 2.2 2.2-2.2H19V3H5ZM5 3v14Z"/>
    </Icon>
  );
});

IconMaterialNestFoundSavings.displayName = 'AmauiIconMaterialNestFoundSavings';

export default IconMaterialNestFoundSavings;
