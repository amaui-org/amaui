import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotationAngleupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationAngleupW100'

      short_name='TextRotationAngleup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.175 19.875q-.1-.1-.1-.25t.1-.25L18.9 9.65h-2.05q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.5q.325 0 .538.212.212.213.212.538v2.5q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-2.05l-9.725 9.725q-.1.1-.25.1t-.25-.1Zm-.5-5.775q-.15.15-.325.112-.175-.037-.275-.237L4.025 4.9q-.05-.125-.038-.275.013-.15.138-.275.1-.1.263-.125.162-.025.287.025l9 4.125q.2.1.238.262.037.163-.088.313-.05.075-.188.1-.137.025-.212-.025l-2.55-1.175-3.325 3.325 1.175 2.55q.05.075.037.187-.012.113-.087.188Zm-1.4-3.575 2.95-2.975-5.3-2.45-.05.05Z"/>
    </Icon>
  );
});

IconMaterialTextRotationAngleupW100.displayName = 'AmauiIconMaterialTextRotationAngleupW100';

export default IconMaterialTextRotationAngleupW100;
