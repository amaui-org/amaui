import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDigitalOutOfHomeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DigitalOutOfHomeW100'

      short_name='DigitalOutOfHome'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M.65 22.35V3.15q0-.625.438-1.063.437-.437 1.062-.437h6.7q.625 0 1.063.437.437.438.437 1.063v19.2h-.7v-2h-8.3v2Zm.7-2.7h8.3V3.15q0-.35-.225-.575Q9.2 2.35 8.85 2.35h-6.7q-.35 0-.575.225-.225.225-.225.575Zm2.8-6.9v-3.5L7.2 11ZM17 6.6q-.675 0-1.137-.463Q15.4 5.675 15.4 5t.463-1.138Q16.325 3.4 17 3.4t1.138.462Q18.6 4.325 18.6 5q0 .675-.462 1.137Q17.675 6.6 17 6.6Zm-1.35 15.75V16.8l2.15-2.1-.975-4.475q-.95 1.625-2.025 2.287-1.075.663-2.4.788v-.7q1.35-.15 2.1-.65t1.375-1.525l.975-1.575q.35-.575.9-.662.55-.088 1.175.187L23.35 10.2v3.65h-.7v-3.175L19.35 9.3l2.8 13.05h-.7l-1.95-7.6-3.15 3.025v4.575Z"/>
    </Icon>
  );
});

IconMaterialDigitalOutOfHomeW100.displayName = 'AmauiIconMaterialDigitalOutOfHomeW100';

export default IconMaterialDigitalOutOfHomeW100;
