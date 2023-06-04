import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMobileOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileOffW100Filled'

      short_name='MobileOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.7 22.35 1.35 3q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125L21.2 21.85q.1.1.112.237.013.138-.112.263t-.25.125q-.125 0-.25-.125ZM6.3 7.45l.7.7v10.5h10.025l.675.675v.875q0 .625-.438 1.062-.437.438-1.062.438H7.8q-.625 0-1.062-.438Q6.3 20.825 6.3 20.2ZM17.7 3.8v11.75l-.7-.7v-9.5H7.5L6.3 4.125V3.8q0-.625.438-1.063Q7.175 2.3 7.8 2.3h8.4q.65 0 1.075.425.425.425.425 1.075Z"/>
    </Icon>
  );
});

IconMaterialMobileOffW100Filled.displayName = 'AmauiIconMaterialMobileOffW100Filled';

export default IconMaterialMobileOffW100Filled;
