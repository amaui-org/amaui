import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRebaseEditW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RebaseEditW100Filled'

      short_name='RebaseEdit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.75 9.325-.5-.5 2.5-2.475H7.675q-.125.5-.475.85t-.85.475v8.65q.575.125.962.588.388.462.388 1.087 0 .7-.5 1.2t-1.2.5q-.7 0-1.2-.5T4.3 18q0-.625.388-1.087.387-.463.962-.588v-8.65q-.575-.125-.962-.587Q4.3 6.625 4.3 6q0-.7.5-1.2T6 4.3q.625 0 1.088.387.462.388.587.963h5.075l-2.5-2.475.5-.5L14.075 6ZM18 4.3q.7 0 1.2.5t.5 1.2q0 .7-.5 1.2t-1.2.5q-.7 0-1.2-.5T16.3 6q0-.7.5-1.2t1.2-.5Zm-1.975 8.25 1.225 1.175 1.225 1.2-4.75 4.775H11.3v-2.425Zm2.95 1.875-2.45-2.375 1.325-1.325 2.525 2.3Z"/>
    </Icon>
  );
});

IconMaterialRebaseEditW100Filled.displayName = 'AmauiIconMaterialRebaseEditW100Filled';

export default IconMaterialRebaseEditW100Filled;
