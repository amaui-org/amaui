import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignFlexEndW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexEndW100'

      short_name='AlignFlexEnd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 924v-28h696v28H132Zm314-160V256h68v508h-68Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexEndW100.displayName = 'AmauiIconMaterialAlignFlexEndW100';

export default IconMaterialAlignFlexEndW100;
