import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRepartition = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Repartition'

      short_name='Repartition'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 14v-2h14q.825 0 1.413-.588Q19 10.825 19 10t-.587-1.413Q17.825 8 17 8H5.825l1.6 1.575L6 11 2 7l4-4 1.425 1.4-1.6 1.6H17q1.65 0 2.825 1.175Q21 8.35 21 10q0 1.65-1.175 2.825Q18.65 14 17 14Zm0 8v-6h18v6Zm2-2h3.325v-2H5Zm5.325 0h3.325v-2h-3.325Zm5.35 0H19v-2h-3.325Z"/>
    </Icon>
  );
});

IconMaterialRepartition.displayName = 'AmauiIconMaterialRepartition';

export default IconMaterialRepartition;
