import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPianoOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoOffW100Filled'

      short_name='PianoOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.85 20.85-1.2-1.2q-.125.025-.225.038-.1.012-.225.012H4.3V5.8q0-.125.012-.225.013-.1.038-.225l-1.2-1.2.5-.5 16.7 16.7Zm-.15-3.95-.7-.7V5h-2.525v8.675l-3.2-3.2V5h-2.55v2.925L7.1 4.3h12.6ZM5 19h3.775v-4.9h-1.25V8.525L5 6Zm4.475 0h5.05v-3.475l-3.8-3.8V14.1h-1.25Zm5.75 0H18l-2.775-2.775Z"/>
    </Icon>
  );
});

IconMaterialPianoOffW100Filled.displayName = 'AmauiIconMaterialPianoOffW100Filled';

export default IconMaterialPianoOffW100Filled;
