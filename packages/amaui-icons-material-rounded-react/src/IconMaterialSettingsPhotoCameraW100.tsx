import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsPhotoCameraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPhotoCameraW100'

      short_name='SettingsPhotoCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.975 12.025Zm-.05 3.475q.325-1.425 1.25-2.538.925-1.112 2.25-1.687-.275-1.2-1.212-1.988Q13.275 8.5 12 8.5q-1.475 0-2.488 1.025Q8.5 10.55 8.5 12q0 1.45 1 2.45 1 1 2.425 1.05ZM4 18V6v5.2-.425V18Zm.8.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h2.9l1.85-2h4.9l1.85 2h2.9q.65 0 1.075.425.425.425.425 1.075v4.7q-.175-.1-.337-.175-.163-.075-.363-.15V6.8q0-.3-.25-.55Q19.5 6 19.2 6H4.8q-.3 0-.55.25Q4 6.5 4 6.8v10.4q0 .3.25.55.25.25.55.25h7.1q.05.2.088.362.037.163.087.338Zm12.675 1.675-.05-.675q-.65-.125-1.05-.375t-.75-.625l-.6.325-.45-.6.575-.45q-.225-.6-.225-1.15 0-.55.225-1.15l-.575-.45.45-.6.6.325q.35-.375.75-.625t1.05-.375l.05-.675h.7l.05.675q.65.125 1.05.375t.75.625l.6-.325.45.6-.575.45q.225.6.225 1.15 0 .55-.225 1.15l.575.45-.45.6-.6-.325q-.35.375-.75.625t-1.05.375l-.05.675Zm.35-1.35q.9 0 1.55-.65t.65-1.55q0-.9-.65-1.55t-1.55-.65q-.9 0-1.55.65t-.65 1.55q0 .9.65 1.55t1.55.65Z"/>
    </Icon>
  );
});

IconMaterialSettingsPhotoCameraW100.displayName = 'AmauiIconMaterialSettingsPhotoCameraW100';

export default IconMaterialSettingsPhotoCameraW100;
