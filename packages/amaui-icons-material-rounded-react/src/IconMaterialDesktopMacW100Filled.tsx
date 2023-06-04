import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopMacW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopMacW100Filled'

      short_name='DesktopMac'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.75 18.3q-.5 0-.688-.463-.187-.462.163-.812L11.5 15.75H4.8q-.625 0-1.063-.438-.437-.437-.437-1.062V5.8q0-.625.437-1.063Q4.175 4.3 4.8 4.3h14.4q.625 0 1.063.437.437.438.437 1.063v8.45q0 .625-.437 1.062-.438.438-1.063.438h-6.7l1.275 1.275q.35.35.163.812-.188.463-.688.463ZM4 14h16V5.8q0-.35-.225-.575Q19.55 5 19.2 5H4.8q-.35 0-.575.225Q4 5.45 4 5.8Zm0 0V5.8q0-.35.225-.575Q4.45 5 4.8 5h14.4q.35 0 .575.225Q20 5.45 20 5.8V14Z"/>
    </Icon>
  );
});

IconMaterialDesktopMacW100Filled.displayName = 'AmauiIconMaterialDesktopMacW100Filled';

export default IconMaterialDesktopMacW100Filled;
