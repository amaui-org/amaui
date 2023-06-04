import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeMotionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMotionW100Filled'

      short_name='AutoAwesomeMotion'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 13q-.15 0-.25-.1t-.1-.25V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h7.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H4.8q-.35 0-.575.225Q4 4.45 4 4.8v7.85q0 .15-.1.25t-.25.1Zm4 4q-.15 0-.25-.1t-.1-.25V8.8q0-.65.425-1.075Q8.15 7.3 8.8 7.3h7.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H8.8q-.35 0-.575.225Q8 8.45 8 8.8v7.85q0 .15-.1.25t-.25.1Zm11.55 3.7h-6.4q-.65 0-1.075-.425-.425-.425-.425-1.075v-6.4q0-.65.425-1.075.425-.425 1.075-.425h6.4q.65 0 1.075.425.425.425.425 1.075v6.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMotionW100Filled.displayName = 'AmauiIconMaterialAutoAwesomeMotionW100Filled';

export default IconMaterialAutoAwesomeMotionW100Filled;
