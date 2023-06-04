import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewArrayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewArrayW100Filled'

      short_name='ViewArray'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.75 17.7q-.325 0-.538-.213Q18 17.275 18 16.95v-9.9q0-.325.212-.538.213-.212.538-.212h.2q.325 0 .538.212.212.213.212.538v9.9q0 .325-.212.537-.213.213-.538.213Zm-9.7 0q-.325 0-.538-.213-.212-.212-.212-.537v-9.9q0-.325.212-.538.213-.212.538-.212h5.9q.325 0 .538.212.212.213.212.538v9.9q0 .325-.212.537-.213.213-.538.213Zm-4 0q-.325 0-.537-.213-.213-.212-.213-.537v-9.9q0-.325.213-.538.212-.212.537-.212h.2q.325 0 .537.212Q6 6.725 6 7.05v9.9q0 .325-.213.537-.212.213-.537.213Z"/>
    </Icon>
  );
});

IconMaterialViewArrayW100Filled.displayName = 'AmauiIconMaterialViewArrayW100Filled';

export default IconMaterialViewArrayW100Filled;
