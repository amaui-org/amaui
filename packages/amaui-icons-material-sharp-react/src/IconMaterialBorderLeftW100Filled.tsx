import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderLeftW100Filled'

      short_name='BorderLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 20.5v-17h1v17Zm4 0v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm-8-4v-1h1v1Zm8 0v-1h1v1Zm-12-4v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm-8-4v-1h1v1Zm8 0v-1h1v1Zm-12-4v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialBorderLeftW100Filled.displayName = 'AmauiIconMaterialBorderLeftW100Filled';

export default IconMaterialBorderLeftW100Filled;
