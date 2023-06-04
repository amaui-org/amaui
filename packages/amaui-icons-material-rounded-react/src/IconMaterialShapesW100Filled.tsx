import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShapesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShapesW100Filled'

      short_name='Shapes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 15q-2.375 0-4.037-1.663Q3.6 11.675 3.6 9.3t1.663-4.038Q6.925 3.6 9.3 3.6t4.038 1.662Q15 6.925 15 9.3t-1.662 4.037Q11.675 15 9.3 15ZM9 18.9V18h.3q3.625 0 6.163-2.538Q18 12.925 18 9.3V9h.9q.625 0 1.063.438.437.437.437 1.062v8.4q0 .625-.437 1.062-.438.438-1.063.438h-8.4q-.625 0-1.062-.438Q9 19.525 9 18.9Z"/>
    </Icon>
  );
});

IconMaterialShapesW100Filled.displayName = 'AmauiIconMaterialShapesW100Filled';

export default IconMaterialShapesW100Filled;
