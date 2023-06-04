import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignFlexEndW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexEndW100Filled'

      short_name='AlignFlexEnd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 924v-28h696v28H132Zm314-160V256h68v508h-68Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexEndW100Filled.displayName = 'AmauiIconMaterialAlignFlexEndW100Filled';

export default IconMaterialAlignFlexEndW100Filled;
