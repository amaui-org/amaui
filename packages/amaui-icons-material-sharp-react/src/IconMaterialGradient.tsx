import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGradient = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Gradient'

      short_name='Gradient'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 13v-2h2v2Zm-2 2v-2h2v2Zm4 0v-2h2v2Zm2-2v-2h2v2Zm-8 0v-2h2v2Zm-4 8V3h18v18Zm4-2h2v-2H7Zm4 0h2v-2h-2Zm4 0h2v-2h-2ZM5 17h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h-2v-2h2V5H5v8h2v2H5Zm0 2V5Z"/>
    </Icon>
  );
});

IconMaterialGradient.displayName = 'AmauiIconMaterialGradient';

export default IconMaterialGradient;
