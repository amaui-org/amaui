import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMotionBlurW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionBlurW100Filled'

      short_name='MotionBlur'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 16.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h7.125q-1-.675-1.462-1.55-.463-.875-.513-1.75H9.2q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.45q.1-.925.563-1.8.462-.875 1.412-1.5H4q-.15 0-.25-.1T3.65 8q0-.15.1-.25t.25-.1h13q1.8 0 3.075 1.275Q21.35 10.2 21.35 12q0 1.8-1.275 3.075Q18.8 16.35 17 16.35Zm9.5-.7q1.5 0 2.575-1.075Q20.65 13.5 20.65 12q0-1.5-1.075-2.575Q18.5 8.35 17 8.35q-1.5 0-2.575 1.075Q13.35 10.5 13.35 12q0 1.5 1.075 2.575Q15.5 15.65 17 15.65Zm-14-3.3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm1 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialMotionBlurW100Filled.displayName = 'AmauiIconMaterialMotionBlurW100Filled';

export default IconMaterialMotionBlurW100Filled;
