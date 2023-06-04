import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMobileOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileOffW100'

      short_name='MobileOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.7 22.35 1.35 3q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125L21.2 21.85q.1.1.112.237.013.138-.112.263t-.25.125q-.125 0-.25-.125ZM6.3 7.45l.7.7v10.5h10.025l.675.675v.875q0 .625-.438 1.062-.437.438-1.062.438H7.8q-.625 0-1.062-.438Q6.3 20.825 6.3 20.2Zm.7 11.9v.85q0 .35.225.575Q7.45 21 7.8 21h8.4q.35 0 .575-.225Q17 20.55 17 20.2v-.85ZM17.7 3.8v11.75l-.7-.7v-9.5H7.5L6.3 4.125V3.8q0-.625.438-1.063Q7.175 2.3 7.8 2.3h8.4q.65 0 1.075.425.425.425.425 1.075ZM7 4.65h10V3.8q0-.35-.225-.575Q16.55 3 16.2 3H7.8q-.35 0-.575.225Q7 3.45 7 3.8Zm0 14.7V21v-1.65Zm0-14.7V3 3.8Z"/>
    </Icon>
  );
});

IconMaterialMobileOffW100.displayName = 'AmauiIconMaterialMobileOffW100';

export default IconMaterialMobileOffW100;
