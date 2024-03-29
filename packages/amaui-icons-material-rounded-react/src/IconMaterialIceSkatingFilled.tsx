import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIceSkatingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IceSkatingFilled'

      short_name='IceSkating'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20v-2H5q-.825 0-1.413-.587Q3 16.825 3 16V5q0-.825.587-1.413Q4.175 3 5 3h4q.825 0 1.413.587Q11 4.175 11 5v1H8.5q-.2 0-.35.15Q8 6.3 8 6.5q0 .2.15.35.15.15.35.15H11v.5q0 .2.05.5H8.5q-.2 0-.35.15Q8 8.3 8 8.5q0 .2.15.35.15.15.35.15h2.9q.35.575.888.975.537.4 1.187.6l2.625.725q1.3.35 2.1 1.412.8 1.063.8 2.413V16q0 .825-.587 1.413Q17.825 18 17 18h-1v2h2q1.025 0 1.825-.613.8-.612 1.075-1.587.1-.35.338-.575.237-.225.587-.225.5 0 .825.363.325.362.2.812-.4 1.7-1.762 2.763Q19.725 22 18 22H3q-.425 0-.712-.288Q2 21.425 2 21t.288-.712Q2.575 20 3 20Zm2 0h6v-2H8Z"/>
    </Icon>
  );
});

IconMaterialIceSkatingFilled.displayName = 'AmauiIconMaterialIceSkatingFilled';

export default IconMaterialIceSkatingFilled;
