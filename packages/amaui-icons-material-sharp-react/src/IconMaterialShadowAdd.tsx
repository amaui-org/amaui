import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShadowAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShadowAdd'

      short_name='ShadowAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-400v-120H400v-80h120v-120h80v120h120v80H600v120h-80ZM80-80v-640h160v-160h640v640H720v160H80Zm240-240h480v-480H320v480Z"/>
    </Icon>
  );
});

IconMaterialShadowAdd.displayName = 'AmauiIconMaterialShadowAdd';

export default IconMaterialShadowAdd;
