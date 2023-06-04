import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoLabelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoLabelW100Filled'

      short_name='AutoLabel'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M782 576 621 804H178V348h441l163 228ZM427 686l34-76 76-34-76-34-34-76-34 76-76 34 76 34 34 76Z"/>
    </Icon>
  );
});

IconMaterialAutoLabelW100Filled.displayName = 'AmauiIconMaterialAutoLabelW100Filled';

export default IconMaterialAutoLabelW100Filled;
