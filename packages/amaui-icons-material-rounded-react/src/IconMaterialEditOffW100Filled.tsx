import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffW100Filled'

      short_name='EditOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.925 20.8-6.875-6.875-5.4 5.4q-.125.125-.25.175-.125.05-.275.05H5.2q-.325 0-.538-.213-.212-.212-.212-.537v-.925q0-.15.05-.275.05-.125.175-.25l5.4-5.4-7.15-7.15Q2.8 4.675 2.8 4.55t.125-.25q.125-.125.25-.125t.25.125l16 16q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125ZM17.9 8.075 15.925 6.1 17.1 4.925q.2-.2.5-.2t.5.2l.975.975q.2.2.2.5t-.2.5Zm-3.95 3.95-1.975-1.975 3.45-3.45L17.4 8.575Z"/>
    </Icon>
  );
});

IconMaterialEditOffW100Filled.displayName = 'AmauiIconMaterialEditOffW100Filled';

export default IconMaterialEditOffW100Filled;
