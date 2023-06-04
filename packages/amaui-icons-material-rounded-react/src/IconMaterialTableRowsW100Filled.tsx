import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableRowsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsW100Filled'

      short_name='TableRows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.7 8.125q0 .325-.212.537-.213.213-.538.213H5.05q-.325 0-.537-.213Q4.3 8.45 4.3 8.125V5.05q0-.325.213-.538.212-.212.537-.212h13.9q.325 0 .538.212.212.213.212.538Zm0 5.55q0 .325-.212.537-.213.213-.538.213H5.05q-.325 0-.537-.213Q4.3 14 4.3 13.675v-3.35q0-.325.213-.538.212-.212.537-.212h13.9q.325 0 .538.212.212.213.212.538Zm0 5.275q0 .325-.212.537-.213.213-.538.213H5.05q-.325 0-.537-.213-.213-.212-.213-.537v-3.075q0-.325.213-.538.212-.212.537-.212h13.9q.325 0 .538.212.212.213.212.538Z"/>
    </Icon>
  );
});

IconMaterialTableRowsW100Filled.displayName = 'AmauiIconMaterialTableRowsW100Filled';

export default IconMaterialTableRowsW100Filled;
