import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotationAngledownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationAngledownW100Filled'

      short_name='TextRotationAngledown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.1 20.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.05L3.425 9.925q-.1-.1-.1-.25t.1-.25q.1-.1.25-.1t.25.1l9.725 9.725V17.1q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.5q0 .325-.212.538-.213.212-.538.212Zm3.225-6.3q-.05-.05-.075-.163-.025-.112.025-.187l1.175-2.575L12.125 7.8 9.575 9q-.075.05-.188.025-.112-.025-.187-.1-.15-.15-.112-.313.037-.162.237-.262l9.05-4.075q.125-.05.288-.038.162.013.287.138.1.1.125.275.025.175-.025.3l-4.125 9q-.1.2-.275.225-.175.025-.325-.125Zm1.4-3.55L18.2 5.2l-.075-.075-5.375 2.4Z"/>
    </Icon>
  );
});

IconMaterialTextRotationAngledownW100Filled.displayName = 'AmauiIconMaterialTextRotationAngledownW100Filled';

export default IconMaterialTextRotationAngledownW100Filled;
