import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialManW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManW100Filled'

      short_name='Man'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.05 21.35q-.325 0-.537-.212-.213-.213-.213-.538v-5.7h-.95q-.325 0-.538-.212-.212-.213-.212-.538v-5.1q0-.625.437-1.063.438-.437 1.063-.437h3.8q.625 0 1.063.437.437.438.437 1.063v5.1q0 .325-.212.538-.213.212-.538.212h-.95v5.7q0 .325-.212.538-.213.212-.538.212ZM12 5.75q-.65 0-1.125-.475T10.4 4.15q0-.65.475-1.125T12 2.55q.65 0 1.125.475T13.6 4.15q0 .65-.475 1.125T12 5.75Z"/>
    </Icon>
  );
});

IconMaterialManW100Filled.displayName = 'AmauiIconMaterialManW100Filled';

export default IconMaterialManW100Filled;
