import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewColumnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnW100Filled'

      short_name='ViewColumn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.05 17.7q-.325 0-.537-.213-.213-.212-.213-.537v-9.9q0-.325.213-.538.212-.212.537-.212h3.4q.325 0 .538.212.212.213.212.538v9.9q0 .325-.212.537-.213.213-.538.213Zm5.6 0q-.325 0-.537-.213-.213-.212-.213-.537v-9.9q0-.325.213-.538.212-.212.537-.212h2.7q.325 0 .538.212.212.213.212.538v9.9q0 .325-.212.537-.213.213-.538.213Zm4.9 0q-.325 0-.537-.213-.213-.212-.213-.537v-9.9q0-.325.213-.538.212-.212.537-.212h3.4q.325 0 .538.212.212.213.212.538v9.9q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialViewColumnW100Filled.displayName = 'AmauiIconMaterialViewColumnW100Filled';

export default IconMaterialViewColumnW100Filled;
