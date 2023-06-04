import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifyFlexStartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyFlexStartW100Filled'

      short_name='AlignJustifyFlexStart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 924V228h28v696h-28Zm414-174V402h68v348h-68Zm-240 0V402h68v348h-68Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyFlexStartW100Filled.displayName = 'AmauiIconMaterialAlignJustifyFlexStartW100Filled';

export default IconMaterialAlignJustifyFlexStartW100Filled;
