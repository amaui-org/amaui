import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonSearchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonSearchFilled'

      short_name='PersonSearch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 12q-1.65 0-2.825-1.175Q7 9.65 7 8q0-1.65 1.175-2.825Q9.35 4 11 4q1.65 0 2.825 1.175Q15 6.35 15 8q0 1.65-1.175 2.825Q12.65 12 11 12Zm10.4 10.8-2.5-2.5q-.525.3-1.125.5T16.5 21q-1.875 0-3.188-1.312Q12 18.375 12 16.5q0-1.875 1.312-3.188Q14.625 12 16.5 12q1.875 0 3.188 1.312Q21 14.625 21 16.5q0 .675-.2 1.275-.2.6-.5 1.125l2.5 2.5q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM16.5 19q1.05 0 1.775-.725Q19 17.55 19 16.5q0-1.05-.725-1.775Q17.55 14 16.5 14q-1.05 0-1.775.725Q14 15.45 14 16.5q0 1.05.725 1.775Q15.45 19 16.5 19ZM5 20q-.825 0-1.413-.587Q3 18.825 3 18v-.775q0-.85.425-1.575t1.175-1.1q1.275-.65 2.875-1.1 1.6-.45 3.55-.45-.5.775-.763 1.662Q10 15.55 10 16.5q0 .925.262 1.812.263.888.763 1.688Z"/>
    </Icon>
  );
});

IconMaterialPersonSearchFilled.displayName = 'AmauiIconMaterialPersonSearchFilled';

export default IconMaterialPersonSearchFilled;
