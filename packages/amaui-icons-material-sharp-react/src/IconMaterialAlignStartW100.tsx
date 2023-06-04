import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignStartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignStartW100'

      short_name='AlignStart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 256v-28h696v28H132Zm174 214v-68h348v68H306Zm0 240v-68h348v68H306Z"/>
    </Icon>
  );
});

IconMaterialAlignStartW100.displayName = 'AmauiIconMaterialAlignStartW100';

export default IconMaterialAlignStartW100;
