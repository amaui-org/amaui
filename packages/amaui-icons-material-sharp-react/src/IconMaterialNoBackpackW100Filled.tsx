import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoBackpackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoBackpackW100Filled'

      short_name='NoBackpack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16 13.175 2.7 2.7V8q0-1.4-.9-2.313-.9-.912-2.1-1.037v-2H14v2h-4v-2H8.3v2q-.225.025-.4.062-.175.038-.275.088l7.85 7.85H16Zm3.85 7.675L17.1 18.1h1l.6.6v2.15H5.3V8q0-.575.175-1.088.175-.512.5-.937l.4.4v1L3.15 4.15l.5-.5 16.7 16.7ZM8 13.35h4.35l-.7-.7H8Z"/>
    </Icon>
  );
});

IconMaterialNoBackpackW100Filled.displayName = 'AmauiIconMaterialNoBackpackW100Filled';

export default IconMaterialNoBackpackW100Filled;
