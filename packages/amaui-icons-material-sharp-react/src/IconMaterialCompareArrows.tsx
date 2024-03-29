import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCompareArrows = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareArrows'

      short_name='CompareArrows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8 20-1.4-1.425L9.175 16H2v-2h7.175L6.6 11.425 8 10l5 5Zm8-6-5-5 5-5 1.4 1.425L14.825 8H22v2h-7.175l2.575 2.575Z"/>
    </Icon>
  );
});

IconMaterialCompareArrows.displayName = 'AmauiIconMaterialCompareArrows';

export default IconMaterialCompareArrows;
