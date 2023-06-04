import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRebaseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RebaseW100Filled'

      short_name='Rebase'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.75 21.325-.475-.5 2.475-2.475H7.675q-.125.575-.587.962Q6.625 19.7 6 19.7q-.7 0-1.2-.5T4.3 18q0-.625.388-1.087.387-.463.962-.588v-8.65q-.575-.125-.962-.587Q4.3 6.625 4.3 6q0-.7.5-1.2T6 4.3q.625 0 1.088.387.462.388.587.963h5.075l-2.5-2.475.5-.5L14.075 6 10.75 9.325l-.5-.5 2.5-2.475H7.675q-.125.5-.475.85t-.85.475v8.65q.5.125.85.475t.475.85h5.05l-2.45-2.475.475-.5L14.075 18ZM18 19.7q-.7 0-1.2-.5t-.5-1.2q0-.625.388-1.087.387-.463.962-.588v-8.65q-.575-.125-.962-.587Q16.3 6.625 16.3 6q0-.7.5-1.2t1.2-.5q.7 0 1.2.5t.5 1.2q0 .625-.388 1.088-.387.462-.962.587v8.65q.575.125.962.588.388.462.388 1.087 0 .7-.5 1.2t-1.2.5Z"/>
    </Icon>
  );
});

IconMaterialRebaseW100Filled.displayName = 'AmauiIconMaterialRebaseW100Filled';

export default IconMaterialRebaseW100Filled;
