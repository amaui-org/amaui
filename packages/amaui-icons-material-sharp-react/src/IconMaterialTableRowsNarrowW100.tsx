import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableRowsNarrowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsNarrowW100'

      short_name='TableRowsNarrow'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 709h560V590H200v119Zm0-147h560V443H200v119Zm0-147h560V296H200v119Zm-28 469V268h616v616H172Zm28-28h560V737H200v119Z"/>
    </Icon>
  );
});

IconMaterialTableRowsNarrowW100.displayName = 'AmauiIconMaterialTableRowsNarrowW100';

export default IconMaterialTableRowsNarrowW100;
