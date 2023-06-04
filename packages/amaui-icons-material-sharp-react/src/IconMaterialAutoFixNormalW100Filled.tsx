import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoFixNormalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoFixNormalW100Filled'

      short_name='AutoFixNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.4 6.55-.65-1.4-1.4-.65 1.4-.65.65-1.4.65 1.4 1.4.65-1.4.65ZM5.7 20.6l-2.4-2.4L14.1 7.45l2.4 2.4Zm8.375-9.375 1.4-1.4-1.4-1.4-1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialAutoFixNormalW100Filled.displayName = 'AmauiIconMaterialAutoFixNormalW100Filled';

export default IconMaterialAutoFixNormalW100Filled;
