import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEggFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EggFilled'

      short_name='Egg'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-2.925 0-4.962-2.038Q5 16.925 5 14q0-1.925.638-3.875.637-1.95 1.65-3.538Q8.3 5 9.55 4 10.8 3 12 3q1.225 0 2.463 1 1.237 1 2.25 2.587 1.012 1.588 1.65 3.538Q19 12.075 19 14q0 2.925-2.038 4.962Q14.925 21 12 21Zm1-3h1v-2h-1q-1.25 0-2.125-.875T10 13v-1H8v1q0 2.075 1.463 3.538Q10.925 18 13 18Z"/>
    </Icon>
  );
});

IconMaterialEggFilled.displayName = 'AmauiIconMaterialEggFilled';

export default IconMaterialEggFilled;
