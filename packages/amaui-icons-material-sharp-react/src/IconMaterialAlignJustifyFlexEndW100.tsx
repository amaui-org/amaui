import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifyFlexEndW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyFlexEndW100'

      short_name='AlignJustifyFlexEnd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M800 924V228h28v696h-28ZM586 750V402h68v348h-68Zm-240 0V402h68v348h-68Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyFlexEndW100.displayName = 'AmauiIconMaterialAlignJustifyFlexEndW100';

export default IconMaterialAlignJustifyFlexEndW100;
