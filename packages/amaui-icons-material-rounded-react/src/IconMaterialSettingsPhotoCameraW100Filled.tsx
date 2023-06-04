import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsPhotoCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPhotoCameraW100Filled'

      short_name='SettingsPhotoCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h2.9l1.85-2h4.9l1.85 2h2.9q.65 0 1.075.425.425.425.425 1.075v4.7q-.675-.35-1.388-.538-.712-.187-1.487-.187-.65 0-1.25.125t-1.15.375q-.275-1.2-1.212-1.988Q13.275 8.5 12 8.5q-1.475 0-2.488 1.025Q8.5 10.55 8.5 12q0 1.45 1 2.45 1 1 2.425 1.05-.2.725-.162 1.562.037.838.312 1.638Zm7.325-3.9q-1.225.05-2.075-.775Q9.2 13.2 9.2 12q0-.575.225-1.088.225-.512.6-.887t.888-.6Q11.425 9.2 12 9.2q1.05 0 1.825.7.775.7.95 1.7-.925.55-1.612 1.375-.688.825-1.038 1.825Zm5.35 5.575-.05-.675q-.65-.125-1.05-.375t-.75-.625l-.6.325-.45-.6.575-.45q-.225-.6-.225-1.15 0-.55.225-1.15l-.575-.45.45-.6.6.325q.35-.375.75-.625t1.05-.375l.05-.675h.7l.05.675q.65.125 1.05.375t.75.625l.6-.325.45.6-.575.45q.225.6.225 1.15 0 .55-.225 1.15l.575.45-.45.6-.6-.325q-.35.375-.75.625t-1.05.375l-.05.675Zm.35-1.35q.9 0 1.55-.65t.65-1.55q0-.9-.65-1.55t-1.55-.65q-.9 0-1.55.65t-.65 1.55q0 .9.65 1.55t1.55.65Z"/>
    </Icon>
  );
});

IconMaterialSettingsPhotoCameraW100Filled.displayName = 'AmauiIconMaterialSettingsPhotoCameraW100Filled';

export default IconMaterialSettingsPhotoCameraW100Filled;
