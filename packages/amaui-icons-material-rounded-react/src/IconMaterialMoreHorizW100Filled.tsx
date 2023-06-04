import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoreHorizW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreHorizW100Filled'

      short_name='MoreHoriz'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.6 12.7q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm5.4 0q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm5.4 0q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Z"/>
    </Icon>
  );
});

IconMaterialMoreHorizW100Filled.displayName = 'AmauiIconMaterialMoreHorizW100Filled';

export default IconMaterialMoreHorizW100Filled;
