import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifySpaceBetweenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifySpaceBetweenW100Filled'

      short_name='AlignJustifySpaceBetween'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M800 924V750h-68V402h68V228h28v696h-28Zm-668 0V228h28v174h68v348h-68v174h-28Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifySpaceBetweenW100Filled.displayName = 'AmauiIconMaterialAlignJustifySpaceBetweenW100Filled';

export default IconMaterialAlignJustifySpaceBetweenW100Filled;
