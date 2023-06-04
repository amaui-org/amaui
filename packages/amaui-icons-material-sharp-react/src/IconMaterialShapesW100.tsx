import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShapesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShapesW100'

      short_name='Shapes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.7 14.7ZM9 18h.7v1.7h10v-10H18V9h2.4v11.4H9Zm.3-3q-2.375 0-4.037-1.663Q3.6 11.675 3.6 9.3t1.663-4.038Q6.925 3.6 9.3 3.6t4.038 1.662Q15 6.925 15 9.3t-1.662 4.037Q11.675 15 9.3 15Zm0-.7q2.075 0 3.538-1.463Q14.3 11.375 14.3 9.3t-1.462-3.538Q11.375 4.3 9.3 4.3q-2.075 0-3.537 1.462Q4.3 7.225 4.3 9.3q0 2.075 1.463 3.537Q7.225 14.3 9.3 14.3Zm0-5Z"/>
    </Icon>
  );
});

IconMaterialShapesW100.displayName = 'AmauiIconMaterialShapesW100';

export default IconMaterialShapesW100;
