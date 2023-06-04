import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoSettingsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoSettingsW100'

      short_name='VideoSettings'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4V11H20V6H4v12h8v.7Zm6.85-3.4V8.7L15.3 12Zm7.7 4.85-.05-.675q-.65-.125-1.05-.375t-.75-.625l-.6.325-.45-.6.575-.45q-.225-.6-.225-1.15 0-.55.225-1.15L14.95 15l.45-.6.6.325q.35-.375.75-.625t1.05-.375l.05-.675h.7l.05.675q.65.125 1.05.375t.75.625l.6-.325.45.6-.575.45q.225.6.225 1.15 0 .55-.225 1.15l.575.45-.45.6-.6-.325q-.35.375-.75.625t-1.05.375l-.05.675Zm.35-1.35q.9 0 1.55-.65t.65-1.55q0-.9-.65-1.55t-1.55-.65q-.9 0-1.55.65T16 16.6q0 .9.65 1.55t1.55.65Z"/>
    </Icon>
  );
});

IconMaterialVideoSettingsW100.displayName = 'AmauiIconMaterialVideoSettingsW100';

export default IconMaterialVideoSettingsW100;
