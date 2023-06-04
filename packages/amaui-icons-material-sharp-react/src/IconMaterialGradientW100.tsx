import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGradientW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradientW100'

      short_name='Gradient'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 13v-2h2v2Zm-2 2v-2h2v2Zm4 0v-2h2v2Zm2-2v-2h2v2Zm-8 0v-2h2v2Zm-2.7 6.7V4.3h15.4v15.4ZM7 19h2v-2H7Zm4 0h2v-2h-2Zm4 0h2v-2h-2ZM5 17h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h-2v-2h2V5H5v8h2v2H5Zm0 2V5Z"/>
    </Icon>
  );
});

IconMaterialGradientW100.displayName = 'AmauiIconMaterialGradientW100';

export default IconMaterialGradientW100;
