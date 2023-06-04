import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCodeBlocksW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeBlocksW100Filled'

      short_name='CodeBlocks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.6 14.7.5-.5L7.9 12l2.175-2.175-.5-.5L6.9 12Zm4.8 0 2.7-2.7-2.7-2.7-.5.5 2.2 2.2-2.2 2.2Zm-10.1 5V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialCodeBlocksW100Filled.displayName = 'AmauiIconMaterialCodeBlocksW100Filled';

export default IconMaterialCodeBlocksW100Filled;
