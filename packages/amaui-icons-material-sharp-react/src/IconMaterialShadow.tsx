import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShadow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Shadow'

      short_name='Shadow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-640h160v-160h640v640H720v160H80Zm240-240h480v-480H320v480Z"/>
    </Icon>
  );
});

IconMaterialShadow.displayName = 'AmauiIconMaterialShadow';

export default IconMaterialShadow;
