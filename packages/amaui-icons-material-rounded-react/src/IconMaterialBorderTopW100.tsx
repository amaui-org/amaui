import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderTopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderTopW100'

      short_name='BorderTop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 20.5v-1h1v1Zm0-8v-1h1v1Zm4 0v-1h1v1Zm0 8v-1h1v1Zm-8-4v-1h1v1Zm0 4v-1h1v1Zm0-8v-1h1v1Zm0-4v-1h1v1Zm8 8v-1h1v1Zm8-8v-1h1v1Zm0 4v-1h1v1ZM4 4.5q-.2 0-.35-.15Q3.5 4.2 3.5 4q0-.225.15-.363Q3.8 3.5 4 3.5h16q.225 0 .363.137.137.138.137.363 0 .2-.137.35-.138.15-.363.15Zm15.5 12v-1h1v1Zm-4 4v-1h1v1Zm-4-12v-1h1v1Zm8 12v-1h1v1Zm-4-8v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialBorderTopW100.displayName = 'AmauiIconMaterialBorderTopW100';

export default IconMaterialBorderTopW100;
