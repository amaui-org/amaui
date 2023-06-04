import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsAccountBoxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsAccountBoxW100Filled'

      short_name='SettingsAccountBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 18.7q-.65 0-1.075-.425Q4.3 17.85 4.3 17.2V4.8q0-.65.425-1.075Q5.15 3.3 5.8 3.3h12.4q.65 0 1.075.425.425.425.425 1.075v5.625q-.575-.2-1.162-.288-.588-.087-1.188-.087-.825 0-1.587.212-.763.213-1.413.588.225-.35.363-.75.137-.4.137-.85 0-1.2-.825-2.025T12 6.4q-1.2 0-2.025.825T9.15 9.25q0 1.2.825 2.025T12 12.1q.275 0 .512-.05.238-.05.463-.125-.5.55-.875 1.2-.375.65-.575 1.375-1.925.1-3.587.85-1.663.75-2.938 2V18h6.625q.05.2.125.362.075.163.15.338Zm11.2.95-.05-.675q-.65-.125-1.05-.375t-.75-.625l-.6.325-.45-.6.575-.45q-.225-.6-.225-1.15 0-.55.225-1.15l-.575-.45.45-.6.6.325q.35-.375.75-.625t1.05-.375l.05-.675h.7l.05.675q.65.125 1.05.375t.75.625l.6-.325.45.6-.575.45q.225.6.225 1.15 0 .55-.225 1.15l.575.45-.45.6-.6-.325q-.35.375-.75.625t-1.05.375l-.05.675Zm.35-1.35q.9 0 1.55-.65t.65-1.55q0-.9-.65-1.55t-1.55-.65q-.9 0-1.55.65t-.65 1.55q0 .9.65 1.55t1.55.65Z"/>
    </Icon>
  );
});

IconMaterialSettingsAccountBoxW100Filled.displayName = 'AmauiIconMaterialSettingsAccountBoxW100Filled';

export default IconMaterialSettingsAccountBoxW100Filled;
