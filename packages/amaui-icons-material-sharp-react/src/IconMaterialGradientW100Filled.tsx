import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGradientW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradientW100Filled'

      short_name='Gradient'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 13h2v-2h-2Zm-2 2h2v-2H9Zm4 0h2v-2h-2Zm2-2h2v-2h-2Zm-8 0h2v-2H7Zm-2.7 6.7V4.3h15.4v15.4ZM17 15h2v-2h-2ZM5 19h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5Zm0-4h2v-2H5Z"/>
    </Icon>
  );
});

IconMaterialGradientW100Filled.displayName = 'AmauiIconMaterialGradientW100Filled';

export default IconMaterialGradientW100Filled;
