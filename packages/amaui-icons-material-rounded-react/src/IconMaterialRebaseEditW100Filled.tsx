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
      <path d="M6 19.7q-.7 0-1.2-.5T4.3 18q0-.625.388-1.087.387-.463.962-.588v-8.65q-.575-.125-.962-.587Q4.3 6.625 4.3 6q0-.7.5-1.2T6 4.3q.625 0 1.088.387.462.388.587.963h5.075L10.5 3.425q-.125-.1-.125-.238 0-.137.125-.262t.25-.125q.125 0 .25.125l2.55 2.55q.225.225.225.525 0 .3-.225.525L11 9.075q-.05.05-.112.075-.063.025-.125.025-.063 0-.138-.025-.075-.025-.125-.075-.125-.125-.125-.25t.125-.25l2.25-2.225H7.675q-.125.5-.475.85t-.85.475v8.65q.575.125.962.588.388.462.388 1.087 0 .7-.5 1.2t-1.2.5ZM18 4.3q.7 0 1.2.5t.5 1.2q0 .7-.5 1.2t-1.2.5q-.7 0-1.2-.5T16.3 6q0-.7.5-1.2t1.2-.5Zm-1.975 8.25 1.225 1.175 1.225 1.2-4.3 4.325q-.2.2-.487.325-.288.125-.588.125h-1.05q-.325 0-.537-.213-.213-.212-.213-.537V17.9q0-.3.125-.588.125-.287.325-.487Zm2.95 1.875-2.45-2.375.325-.325q.425-.425 1.063-.425.637 0 1.062.45l.3.275q.425.45.425 1.062 0 .613-.45 1.063Z"/>
    </Icon>
  );
});

IconMaterialRebaseEditW100Filled.displayName = 'AmauiIconMaterialRebaseEditW100Filled';

export default IconMaterialRebaseEditW100Filled;
