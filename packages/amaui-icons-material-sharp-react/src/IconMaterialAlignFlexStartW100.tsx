import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignFlexStartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexStartW100'

      short_name='AlignFlexStart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 256v-28h696v28H132Zm314 640V388h68v508h-68Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexStartW100.displayName = 'AmauiIconMaterialAlignFlexStartW100';

export default IconMaterialAlignFlexStartW100;
