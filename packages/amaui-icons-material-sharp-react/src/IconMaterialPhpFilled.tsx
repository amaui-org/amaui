import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhpFilled'

      short_name='Php'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 15V9H11v2h2V9h1.5v6H13v-2.5h-2V15ZM3 15V9h5v4H4.5v2Zm1.5-3.5h2v-1h-2Zm12 3.5V9h5v4H18v2Zm1.5-3.5h2v-1h-2Z"/>
    </Icon>
  );
});

IconMaterialPhpFilled.displayName = 'AmauiIconMaterialPhpFilled';

export default IconMaterialPhpFilled;
