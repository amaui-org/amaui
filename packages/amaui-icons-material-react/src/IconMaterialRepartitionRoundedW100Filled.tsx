import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRepartitionRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepartitionRoundedW100Filled'
      short_name='Repartition'

      {...props}
    >
      <path d="M4 13.1q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12.25q1 0 1.7-.7t.7-1.7q0-1-.7-1.7t-1.7-.7h-12l2 1.975q.075.05.1.113.025.062.025.124 0 .063-.037.138-.038.075-.088.125-.125.1-.25.1t-.25-.1l-2.3-2.3q-.225-.225-.225-.525 0-.3.225-.525l2.3-2.3q.1-.1.25-.113.15-.012.25.113.05.05.088.112.037.063.037.125 0 .063-.025.125-.025.063-.1.113l-2 2h12q1.3 0 2.2.9.9.9.9 2.175 0 1.3-.9 2.213-.9.912-2.2.912ZM5.15 21q-.625 0-1.062-.438-.438-.437-.438-1.062v-1.65q0-.625.438-1.062.437-.438 1.062-.438h12.7q.625 0 1.063.438.437.437.437 1.062v1.65q0 .625-.437 1.062-.438.438-1.063.438Zm-.8-.7h4.375v-3.25H4.35Zm5.075 0h4.125v-3.25H9.425Zm4.85 0h4.375v-3.25h-4.375Z"/>
    </Icon>
  );
});

IconMaterialRepartitionRoundedW100Filled.displayName = 'AmauiIconMaterialRepartitionRoundedW100Filled';

export default IconMaterialRepartitionRoundedW100Filled;
