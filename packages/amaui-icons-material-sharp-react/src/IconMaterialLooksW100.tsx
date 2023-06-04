import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooksW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksW100'

      short_name='Looks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 17q0-2 .762-3.775.763-1.775 2.076-3.088Q6.45 8.825 8.225 8.062 10 7.3 12 7.3t3.775.762q1.775.763 3.088 2.075 1.312 1.313 2.075 3.088Q21.7 15 21.7 17H21q0-3.725-2.637-6.363Q15.725 8 12 8q-3.725 0-6.362 2.637Q3 13.275 3 17Zm4 0q0-2.375 1.663-4.038Q9.625 11.3 12 11.3t4.038 1.662Q17.7 14.625 17.7 17H17q0-2.075-1.462-3.538Q14.075 12 12 12q-2.075 0-3.537 1.462Q7 14.925 7 17Z"/>
    </Icon>
  );
});

IconMaterialLooksW100.displayName = 'AmauiIconMaterialLooksW100';

export default IconMaterialLooksW100;
