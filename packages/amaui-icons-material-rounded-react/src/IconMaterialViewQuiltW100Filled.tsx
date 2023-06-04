import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewQuiltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewQuiltW100Filled'

      short_name='ViewQuilt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.825 7.05q0-.325.213-.538.212-.212.537-.212h8.375q.325 0 .538.212.212.213.212.538v3.85q0 .325-.212.538-.213.212-.538.212h-8.375q-.325 0-.537-.212-.213-.213-.213-.538ZM5.05 17.7q-.325 0-.537-.213-.213-.212-.213-.537v-9.9q0-.325.213-.538.212-.212.537-.212h3.325q.325 0 .538.212.212.213.212.538v9.9q0 .325-.212.537-.213.213-.538.213Zm13.9-5.35q.325 0 .538.212.212.213.212.538v3.85q0 .325-.212.537-.213.213-.538.213h-3.075q-.325 0-.537-.213-.213-.212-.213-.537V13.1q0-.325.213-.538.212-.212.537-.212Zm-9.125.75q0-.325.213-.538.212-.212.537-.212h3.1q.325 0 .538.212.212.213.212.538v3.85q0 .325-.212.537-.213.213-.538.213h-3.1q-.325 0-.537-.213-.213-.212-.213-.537Z"/>
    </Icon>
  );
});

IconMaterialViewQuiltW100Filled.displayName = 'AmauiIconMaterialViewQuiltW100Filled';

export default IconMaterialViewQuiltW100Filled;
