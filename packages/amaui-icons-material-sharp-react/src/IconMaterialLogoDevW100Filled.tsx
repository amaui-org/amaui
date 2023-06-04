import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLogoDevW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoDevW100Filled'

      short_name='LogoDev'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.25 14.6h1.825q.575 0 .913-.35.337-.35.337-.925V10.65q0-.575-.337-.913Q8.65 9.4 8.075 9.4H6.25Zm4.125 0h2.7v-.7h-2v-1.55H12.5v-.7h-1.425V10.1h2v-.7h-2.7Zm4.95 0h1.15L17.9 9.4h-.75l-1.25 4.475L14.6 9.4h-.75Zm-8.375-.7v-3.8h1.125q.275 0 .413.138.137.137.137.412v2.675q0 .275-.137.425-.138.15-.413.15ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialLogoDevW100Filled.displayName = 'AmauiIconMaterialLogoDevW100Filled';

export default IconMaterialLogoDevW100Filled;
