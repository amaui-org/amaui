import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGradeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradeFilled'

      short_name='Grade'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m5.825 22 2.325-7.6L2 10h7.6L12 2l2.4 8H22l-6.15 4.4 2.325 7.6L12 17.3Z"/>
    </Icon>
  );
});

IconMaterialGradeFilled.displayName = 'AmauiIconMaterialGradeFilled';

export default IconMaterialGradeFilled;
