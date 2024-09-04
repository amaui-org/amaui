import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowWarmUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowWarmUpW100Filled'

      short_name='ArrowWarmUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-777 253-564l-19-19 246-246 246 246-19 20-213-213v284h-28v-285Zm0 485v-120h28v120h-28Zm0 160v-80h28v80h-28Z"/>
    </Icon>
  );
});

IconMaterialArrowWarmUpW100Filled.displayName = 'AmauiIconMaterialArrowWarmUpW100Filled';

export default IconMaterialArrowWarmUpW100Filled;
