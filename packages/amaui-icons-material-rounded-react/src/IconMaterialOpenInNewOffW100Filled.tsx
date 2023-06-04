import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInNewOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewOffW100Filled'

      short_name='OpenInNewOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.125.012-.225.013-.1.038-.225l-.975-.975q-.1-.1-.1-.225T3.4 3.9q.125-.125.25-.125t.25.125l16.225 16.225q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-.95-.95q-.125.025-.225.038-.1.012-.225.012Zm0-.7H18l-6.25-6.25-1.775 1.775q-.1.1-.225.1T9.5 14.5q-.125-.125-.125-.25T9.5 14l1.75-1.75L5 6v12.2q0 .3.25.55.25.25.55.25Zm13.9-2.1-.7-.7v-2.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25Zm-6.05-6.05-.5-.5L18.5 5h-4.15q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.6q.325 0 .538.212.212.213.212.538v4.6q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V5.5ZM7.8 5l-.7-.7h3.55q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewOffW100Filled.displayName = 'AmauiIconMaterialOpenInNewOffW100Filled';

export default IconMaterialOpenInNewOffW100Filled;
