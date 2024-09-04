import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlabSerifW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlabSerifW100Filled'

      short_name='SlabSerif'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m313-268 51-132h225l51 132h-87q-6 0-10 4t-4 10q0 6 4 10t10 4h153q6 0 10-4t4-10q0-6-4-10t-10-4h-34L499-710q-2-5-6-7.5t-9-2.5h-13q-5 0-9 2.5t-6 7.5L283-268h-29q-6 0-10 4t-4 10q0 6 4 10t10 4h148q6 0 10-4t4-10q0-6-4.5-10t-10.5-4h-88Zm62-160 101-257h3l99 257H375ZM192-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h576q26 0 43 17t17 43v576q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialSlabSerifW100Filled.displayName = 'AmauiIconMaterialSlabSerifW100Filled';

export default IconMaterialSlabSerifW100Filled;
