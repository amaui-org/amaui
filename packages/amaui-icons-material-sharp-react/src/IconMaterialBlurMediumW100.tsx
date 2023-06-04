import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBlurMediumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlurMediumW100'

      short_name='BlurMedium'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 16.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.875q-1-.675-1.462-1.55-.463-.875-.513-1.75H5.45q-.15 0-.25-.1T5.1 12q0-.15.1-.25t.25-.1h5.45q.1-.925.563-1.8.462-.875 1.412-1.5H5q-.15 0-.25-.1T4.65 8q0-.15.1-.25t.25-.1h10.25q1.8 0 3.075 1.275Q19.6 10.2 19.6 12q0 1.8-1.275 3.075-1.275 1.275-3.075 1.275Zm7.25-.7q1.5 0 2.575-1.075Q18.9 13.5 18.9 12q0-1.5-1.075-2.575Q16.75 8.35 15.25 8.35q-1.5 0-2.575 1.075Q11.6 10.5 11.6 12q0 1.5 1.075 2.575 1.075 1.075 2.575 1.075Zm-10.5.7q-.15 0-.25-.1T4.4 16q0-.15.1-.25t.25-.1h.55q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialBlurMediumW100.displayName = 'AmauiIconMaterialBlurMediumW100';

export default IconMaterialBlurMediumW100;
