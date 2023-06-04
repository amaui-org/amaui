import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDynamicFormW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFormW100Filled'

      short_name='DynamicForm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.15 11q-.625 0-1.062-.438-.438-.437-.438-1.062V6.15q0-.625.438-1.063.437-.437 1.062-.437H13V11Zm0 8.35q-.625 0-1.062-.437-.438-.438-.438-1.063V14.5q0-.625.438-1.062Q3.525 13 4.15 13H15v6.35Zm13.625-1.85q-.125.3-.45.238Q17 17.675 17 17.35V11h-1.6q-.175 0-.287-.113Q15 10.775 15 10.6V5.05q0-.175.113-.288.112-.112.287-.112h5.05q.2 0 .325.175t.05.375L19.05 9.8h1.35q.2 0 .313.175.112.175.037.375Zm-11.95-.575q.3 0 .525-.213.225-.212.225-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.538.212-.212.213-.212.538 0 .325.212.537.213.213.538.213Zm0-8.35q.35 0 .55-.213.2-.212.2-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.538.212-.212.213-.212.538 0 .325.225.537.225.213.525.213Z"/>
    </Icon>
  );
});

IconMaterialDynamicFormW100Filled.displayName = 'AmauiIconMaterialDynamicFormW100Filled';

export default IconMaterialDynamicFormW100Filled;
