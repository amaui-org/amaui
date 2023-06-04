import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignFlexStartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexStartW100Filled'

      short_name='AlignFlexStart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 256v-28h696v28H132Zm314 640V388h68v508h-68Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexStartW100Filled.displayName = 'AmauiIconMaterialAlignFlexStartW100Filled';

export default IconMaterialAlignFlexStartW100Filled;
