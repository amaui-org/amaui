import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestFoundSavingsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestFoundSavingsFilled'

      short_name='NestFoundSavings'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q2.15 0 3.575-1.5Q17 12 17 10V5h-5Q9.975 5 8.488 6.425 7 7.85 7 10q0 .75.213 1.425.212.675.587 1.25l-.4.4q-.3.3-.3.7 0 .4.3.7.3.3.7.3.4 0 .7-.3l.375-.35q.6.425 1.313.65Q11.2 15 12 15Zm0-2q-.375 0-.712-.1-.338-.1-.638-.25l2.6-2.6q.3-.3.3-.713 0-.412-.3-.712t-.7-.3q-.4 0-.7.3l-2.6 2.6q-.125-.275-.188-.588Q9 10.325 9 10q0-1.3.9-2.15Q10.8 7 12 7h3v3q0 1.25-.875 2.125T12 13Zm-.7 8.3L9 19H5q-.825 0-1.413-.587Q3 17.825 3 17V3q0-.825.587-1.413Q4.175 1 5 1h14q.825 0 1.413.587Q21 2.175 21 3v14q0 .825-.587 1.413Q19.825 19 19 19h-4l-2.3 2.3q-.3.3-.7.3-.4 0-.7-.3Z"/>
    </Icon>
  );
});

IconMaterialNestFoundSavingsFilled.displayName = 'AmauiIconMaterialNestFoundSavingsFilled';

export default IconMaterialNestFoundSavingsFilled;
