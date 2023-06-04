import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGMobiledataW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GMobiledataW100Filled'

      short_name='GMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.15 16.5q-.65 0-1.075-.425Q7.65 15.65 7.65 15V9q0-.65.425-1.075Q8.5 7.5 9.15 7.5h5.7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-5.7q-.35 0-.575.225Q8.35 8.65 8.35 9v6q0 .35.225.575.225.225.575.225h4.7q.35 0 .575-.225.225-.225.225-.575v-2.65H12.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.1q.325 0 .538.212.212.213.212.538V15q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialGMobiledataW100Filled.displayName = 'AmauiIconMaterialGMobiledataW100Filled';

export default IconMaterialGMobiledataW100Filled;
