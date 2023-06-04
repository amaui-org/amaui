import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGradientFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradientFilled'

      short_name='Gradient'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 13h2v-2h-2Zm-2 2h2v-2H9Zm4 0h2v-2h-2Zm2-2h2v-2h-2Zm-8 0h2v-2H7Zm-4 8V3h18v18Zm14-6h2v-2h-2ZM5 19h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5Zm0-4h2v-2H5Z"/>
    </Icon>
  );
});

IconMaterialGradientFilled.displayName = 'AmauiIconMaterialGradientFilled';

export default IconMaterialGradientFilled;
