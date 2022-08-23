import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMan2RoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man2RoundedW100'
      short_name='Man2'

      {...props}
    >
      <path d="M10.725 20.6v-5.7H9.35q-.325 0-.538-.212-.212-.213-.212-.538v-5.1q0-.625.437-1.063.438-.437 1.063-.437h3.8q.625 0 1.063.437.437.438.437 1.063v5.1q0 .325-.212.538-.213.212-.538.212h-1.375v5.7q0 .325-.213.538-.212.212-.537.212h-1.05q-.325 0-.537-.212-.213-.213-.213-.538ZM12 5.75q-.65 0-1.125-.475T10.4 4.15q0-.65.475-1.125T12 2.55q.65 0 1.125.475T13.6 4.15q0 .65-.475 1.125T12 5.75Z"/>
    </Icon>
  );
});

IconMaterialMan2RoundedW100.displayName = 'AmauiIconMaterialMan2RoundedW100';

export default IconMaterialMan2RoundedW100;
