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
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425ZM11 11v2h2v-2Zm-4 0v2h2v-2Zm2 2v2h2v-2Zm4 0v2h2v-2Zm-8 0v2h2v-2Zm10-2v2h2v2h2v-2h-2v-2Zm-8 4v2H5v1.2q0 .325.238.562.237.238.562.238H7v-2h2v2h2v-2h2v2h2v-2h2v2h1.2q.325 0 .563-.238.237-.237.237-.562V17h-2v-2h-2v2h-2v-2h-2v2H9v-2Z"/>
    </Icon>
  );
});

IconMaterialGradientW100Filled.displayName = 'AmauiIconMaterialGradientW100Filled';

export default IconMaterialGradientW100Filled;
