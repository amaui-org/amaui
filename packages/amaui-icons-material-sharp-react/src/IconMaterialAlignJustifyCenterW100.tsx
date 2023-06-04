import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifyCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyCenterW100'

      short_name='AlignJustifyCenter'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M466 924V228h28v696h-28Zm120-174V402h68v348h-68Zm-280 0V402h68v348h-68Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyCenterW100.displayName = 'AmauiIconMaterialAlignJustifyCenterW100';

export default IconMaterialAlignJustifyCenterW100;
