import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShapesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShapesFilled'

      short_name='Shapes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 16q-2.925 0-4.963-2.038Q2 11.925 2 9t2.037-4.963Q6.075 2 9 2q2.925 0 4.963 2.037Q16 6.075 16 9q0 2.925-2.037 4.962Q11.925 16 9 16Zm-1 4v-2.05q.25.025.5.038.25.012.5.012 3.75 0 6.375-2.625T18 9q0-.25-.012-.5-.013-.25-.038-.5H20q.825 0 1.413.587Q22 9.175 22 10v10q0 .825-.587 1.413Q20.825 22 20 22H10q-.825 0-1.412-.587Q8 20.825 8 20Z"/>
    </Icon>
  );
});

IconMaterialShapesFilled.displayName = 'AmauiIconMaterialShapesFilled';

export default IconMaterialShapesFilled;
