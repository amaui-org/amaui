import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDisplayExternalInputFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisplayExternalInputFilled'

      short_name='DisplayExternalInput'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m720 976-57-57 64-63H560v-80h167l-63-64 56-56 160 160-160 160Zm-600-40V696h80v160h160v80H120Zm0-480V216h240v80H200v160h-80Zm640 0V296H600v-80h240v240h-80Z"/>
    </Icon>
  );
});

IconMaterialDisplayExternalInputFilled.displayName = 'AmauiIconMaterialDisplayExternalInputFilled';

export default IconMaterialDisplayExternalInputFilled;
