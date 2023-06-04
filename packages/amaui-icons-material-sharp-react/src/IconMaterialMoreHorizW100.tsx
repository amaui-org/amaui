import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoreHorizW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreHorizW100'

      short_name='MoreHoriz'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.6 12.7q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm5.4 0q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm5.4 0q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Z"/>
    </Icon>
  );
});

IconMaterialMoreHorizW100.displayName = 'AmauiIconMaterialMoreHorizW100';

export default IconMaterialMoreHorizW100;
