import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGavelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GavelW100Filled'

      short_name='Gavel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.475 20.35q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h10.025q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Zm4.675-6.7L6.5 11q-.425-.425-.438-1.05-.012-.625.413-1.05l.425-.45 4.8 4.75-.45.45q-.425.425-1.05.425t-1.05-.425ZM15.2 9.7l-4.75-4.8.45-.425q.45-.425 1.063-.413.612.013 1.037.438l2.65 2.65q.425.425.425 1.05t-.425 1.05Zm5.15 9.15L8.45 6.95l.5-.5 11.925 11.925q.1.1.088.238-.013.137-.113.237-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialGavelW100Filled.displayName = 'AmauiIconMaterialGavelW100Filled';

export default IconMaterialGavelW100Filled;
