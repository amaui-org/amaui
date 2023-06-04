import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBlurShortW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlurShortW100'

      short_name='BlurShort'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.25 15.65q1.5 0 2.575-1.075Q18.9 13.5 18.9 12q0-1.5-1.075-2.575Q16.75 8.35 15.25 8.35q-1.5 0-2.575 1.075Q11.6 10.5 11.6 12q0 1.5 1.075 2.575 1.075 1.075 2.575 1.075Zm0 .7q-1.575 0-2.9-1.088-1.325-1.087-1.45-2.912H6.95q-.15 0-.25-.1T6.6 12q0-.15.1-.25t.25-.1h3.95q.075-.925.563-1.813.487-.887 1.412-1.487H5q-.15 0-.25-.1T4.65 8q0-.15.1-.25t.25-.1h10.25q1.8 0 3.075 1.275Q19.6 10.2 19.6 12q0 1.8-1.275 3.075-1.275 1.275-3.075 1.275Z"/>
    </Icon>
  );
});

IconMaterialBlurShortW100.displayName = 'AmauiIconMaterialBlurShortW100';

export default IconMaterialBlurShortW100;
