import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignSpaceBetweenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceBetweenW100Filled'

      short_name='AlignSpaceBetween'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M306 324v-68H132v-28h696v28H654v68H306ZM132 924v-28h174v-68h348v68h174v28H132Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceBetweenW100Filled.displayName = 'AmauiIconMaterialAlignSpaceBetweenW100Filled';

export default IconMaterialAlignSpaceBetweenW100Filled;
