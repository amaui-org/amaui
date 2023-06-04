import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideocamOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamOffW100'

      short_name='VideocamOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.475 14.575 17.4 12.5v2.25l-.7-.7V6.8q0-.35-.225-.575Q16.25 6 15.9 6H8.65l-.7-.7h7.95q.65 0 1.075.425.425.425.425 1.075v4.7l2.075-2.075q.2-.2.438-.088.237.113.237.388v4.55q0 .275-.237.387-.238.113-.438-.087ZM18.8 20 3.175 4.375q-.1-.1-.1-.225T3.2 3.9q.125-.125.25-.125t.25.125l15.625 15.625q.1.1.1.225T19.3 20q-.125.125-.262.125-.138 0-.238-.125Zm-6.075-9.925ZM5.15 5.35 5.8 6h-.3q-.35 0-.575.225Q4.7 6.45 4.7 6.8v10.4q0 .35.225.575Q5.15 18 5.5 18h10.4q.35 0 .575-.225.225-.225.225-.575v-.3l.65.65q-.125.5-.513.825-.387.325-.937.325H5.5q-.65 0-1.075-.425Q4 17.85 4 17.2V6.8q0-.55.325-.938.325-.387.825-.512Zm5.575 6.55Z"/>
    </Icon>
  );
});

IconMaterialVideocamOffW100.displayName = 'AmauiIconMaterialVideocamOffW100';

export default IconMaterialVideocamOffW100;
