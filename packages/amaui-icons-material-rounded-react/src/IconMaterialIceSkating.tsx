import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIceSkating = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IceSkating'

      short_name='IceSkating'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22q-.425 0-.712-.288Q2 21.425 2 21t.288-.712Q2.575 20 3 20h3v-2H5q-.825 0-1.413-.587Q3 16.825 3 16V5q0-.825.587-1.413Q4.175 3 5 3h5q.825 0 1.413.587Q12 4.175 12 5v2.5q0 .675.413 1.225.412.55 1.062.725l2.625.725q1.275.35 2.088 1.412Q19 12.65 19 14v2q0 .825-.587 1.413Q17.825 18 17 18h-1v2h2q1.05 0 1.837-.625.788-.625 1.063-1.575.1-.35.35-.575.25-.225.575-.225.5 0 .825.363.325.362.2.812-.4 1.65-1.737 2.738Q19.775 22 18 22ZM8 8.5q0-.2.15-.35Q8.3 8 8.5 8h1.6q-.05-.3-.062-.5-.013-.2-.038-.5H8.5q-.2 0-.35-.15Q8 6.7 8 6.5q0-.2.15-.35Q8.3 6 8.5 6H10V5H5v11h12v-2q0-.675-.413-1.188-.412-.512-1.062-.712l-2.625-.75q-.9-.275-1.575-.888Q10.65 9.85 10.3 9H8.5q-.2 0-.35-.15Q8 8.7 8 8.5ZM8 20h6v-2H8Zm-3-4Z"/>
    </Icon>
  );
});

IconMaterialIceSkating.displayName = 'AmauiIconMaterialIceSkating';

export default IconMaterialIceSkating;
