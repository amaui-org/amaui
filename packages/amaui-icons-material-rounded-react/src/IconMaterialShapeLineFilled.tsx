import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShapeLineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShapeLineFilled'

      short_name='ShapeLine'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 11q-2.075 0-3.537-1.463Q1 8.075 1 6q0-2.1 1.463-3.55Q3.925 1 6 1q2.1 0 3.55 1.45Q11 3.9 11 6q0 2.075-1.45 3.537Q8.1 11 6 11Zm10 12q-.825 0-1.412-.587Q14 21.825 14 21v-5q0-.825.588-1.413Q15.175 14 16 14h5q.825 0 1.413.587Q23 15.175 23 16v5q0 .825-.587 1.413Q21.825 23 21 23Zm1.725-15.3L7.7 17.7q.125.3.212.625Q8 18.65 8 19q0 1.25-.862 2.125Q6.275 22 5 22q-1.25 0-2.125-.875T2 19q0-1.275.875-2.137Q3.75 16 5 16q.35 0 .675.087.325.088.625.213l10-10.025q-.125-.3-.213-.613Q16 5.35 16 5q0-1.275.875-2.138Q17.75 2 19 2q1.275 0 2.138.862Q22 3.725 22 5q0 1.25-.862 2.125Q20.275 8 19 8q-.35 0-.662-.088-.313-.087-.613-.212Z"/>
    </Icon>
  );
});

IconMaterialShapeLineFilled.displayName = 'AmauiIconMaterialShapeLineFilled';

export default IconMaterialShapeLineFilled;
