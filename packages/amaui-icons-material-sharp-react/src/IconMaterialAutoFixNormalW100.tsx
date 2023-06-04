import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoFixNormalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoFixNormalW100'

      short_name='AutoFixNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.4 6.55-.65-1.4-1.4-.65 1.4-.65.65-1.4.65 1.4 1.4.65-1.4.65ZM5.7 20.6l-2.4-2.4L14.1 7.45l2.4 2.4Zm0-1 7.2-7.2-1.4-1.4-7.2 7.2Z"/>
    </Icon>
  );
});

IconMaterialAutoFixNormalW100.displayName = 'AmauiIconMaterialAutoFixNormalW100';

export default IconMaterialAutoFixNormalW100;
