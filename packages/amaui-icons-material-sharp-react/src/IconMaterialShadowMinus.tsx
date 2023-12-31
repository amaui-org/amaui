import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShadowMinus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShadowMinus'

      short_name='ShadowMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-640h160v-160h640v640H720v160H80Zm240-240h480v-480H320v480Zm80-200v-80h320v80H400Z"/>
    </Icon>
  );
});

IconMaterialShadowMinus.displayName = 'AmauiIconMaterialShadowMinus';

export default IconMaterialShadowMinus;
