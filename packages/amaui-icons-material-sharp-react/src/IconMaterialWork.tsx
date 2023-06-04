import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWork = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Work'

      short_name='Work'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21V6h6V2h8v4h6v15Zm8-15h4V4h-4ZM4 19h16V8H4Zm0 0V8Z"/>
    </Icon>
  );
});

IconMaterialWork.displayName = 'AmauiIconMaterialWork';

export default IconMaterialWork;
