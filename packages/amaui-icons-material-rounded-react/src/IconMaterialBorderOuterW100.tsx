import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderOuterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderOuterW100'

      short_name='BorderOuter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 8.5v-1h1v1Zm0 4v-1h1v1Zm4 0v-1h1v1Zm-10.4 8q-.7 0-1.15-.45-.45-.45-.45-1.15V5.1q0-.7.45-1.15.45-.45 1.15-.45h13.8q.7 0 1.15.45.45.45.45 1.15v13.8q0 .7-.45 1.15-.45.45-1.15.45Zm0-1h13.8q.25 0 .425-.175t.175-.425V5.1q0-.25-.175-.425T18.9 4.5H5.1q-.25 0-.425.175T4.5 5.1v13.8q0 .25.175.425t.425.175Zm6.4-3v-1h1v1Zm-4-4v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialBorderOuterW100.displayName = 'AmauiIconMaterialBorderOuterW100';

export default IconMaterialBorderOuterW100;
