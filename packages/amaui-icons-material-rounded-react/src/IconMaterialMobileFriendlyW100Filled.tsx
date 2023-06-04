import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMobileFriendlyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileFriendlyW100Filled'

      short_name='MobileFriendly'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.95 14.8q-.15 0-.275-.05-.125-.05-.25-.175L11.85 12q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l2.6 2.6 5.45-5.45q.1-.1.238-.113.137-.012.262.113t.125.25q0 .125-.125.25l-5.425 5.425q-.125.125-.25.175-.125.05-.275.05ZM6.8 21.7q-.625 0-1.062-.438Q5.3 20.825 5.3 20.2V3.8q0-.625.438-1.063Q6.175 2.3 6.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063v3.1H16V5.35H6v13.3h10V17.1h.7v3.1q0 .625-.438 1.062-.437.438-1.062.438Z"/>
    </Icon>
  );
});

IconMaterialMobileFriendlyW100Filled.displayName = 'AmauiIconMaterialMobileFriendlyW100Filled';

export default IconMaterialMobileFriendlyW100Filled;
