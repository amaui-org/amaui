import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderLeftW100'

      short_name='BorderLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.5 8.5v-1h1v1Zm-8 0v-1h1v1Zm0 4v-1h1v1Zm8 0v-1h1v1Zm-4-8v-1h1v1Zm4 0v-1h1v1Zm-8 0v-1h1v1Zm-4 0v-1h1v1Zm8 8v-1h1v1Zm-8 8v-1h1v1Zm4 0v-1h1v1Zm-7.5 0q-.2 0-.35-.15-.15-.15-.15-.35V4q0-.225.15-.363Q3.8 3.5 4 3.5q.225 0 .363.137.137.138.137.363v16q0 .2-.137.35-.138.15-.363.15Zm11.5 0v-1h1v1Zm4-4v-1h1v1Zm-12-4v-1h1v1Zm12 8v-1h1v1Zm-8-4v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialBorderLeftW100.displayName = 'AmauiIconMaterialBorderLeftW100';

export default IconMaterialBorderLeftW100;
