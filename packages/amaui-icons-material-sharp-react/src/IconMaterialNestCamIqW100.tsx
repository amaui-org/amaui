import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamIqW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamIqW100'

      short_name='NestCamIq'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 20.075q-.3 0-.5-.2t-.2-.5h3.7v-4.1q-2.075-.15-3.712-1.7-1.638-1.55-1.638-4 0-2.375 1.663-4.038Q9.625 3.875 12 3.875t4.038 1.662Q17.7 7.2 17.7 9.575q0 2.45-1.638 4-1.637 1.55-3.712 1.7v4.1h3.7q0 .3-.2.5t-.5.2Zm3.35-5.5q2.075 0 3.538-1.463Q17 11.65 17 9.575t-1.462-3.538Q14.075 4.575 12 4.575q-2.075 0-3.537 1.462Q7 7.5 7 9.575q0 2.075 1.463 3.537Q9.925 14.575 12 14.575Zm0-3.75q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363Z"/>
    </Icon>
  );
});

IconMaterialNestCamIqW100.displayName = 'AmauiIconMaterialNestCamIqW100';

export default IconMaterialNestCamIqW100;
