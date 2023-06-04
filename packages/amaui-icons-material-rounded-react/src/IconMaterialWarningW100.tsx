import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWarningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningW100'

      short_name='Warning'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12.5Zm-7.45 7.2q-.425 0-.65-.375-.225-.375 0-.75l7.45-12.85q.225-.375.65-.375.425 0 .65.375l7.45 12.85q.225.375 0 .75t-.65.375ZM12 10.5q-.15 0-.25.1t-.1.25v4.3q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-4.3q0-.15-.1-.25t-.25-.1Zm0 7q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15ZM4.45 19h15.1L12 6Z"/>
    </Icon>
  );
});

IconMaterialWarningW100.displayName = 'AmauiIconMaterialWarningW100';

export default IconMaterialWarningW100;
