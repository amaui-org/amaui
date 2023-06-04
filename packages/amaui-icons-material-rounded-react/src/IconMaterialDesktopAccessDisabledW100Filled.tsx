import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopAccessDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopAccessDisabledW100Filled'

      short_name='DesktopAccessDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 4.3v1L2.35 2.85q-.1-.1-.113-.238-.012-.137.113-.262t.25-.125q.125 0 .25.125L20.7 20.2q.1.1.112.238.013.137-.112.262t-.25.125q-.125 0-.25-.125l-4-4h-3.5v2h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-4.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65v-2H4.8q-.65 0-1.075-.425Q3.3 15.85 3.3 15.2V5.8q0-.65.425-1.075Q4.15 4.3 4.8 4.3Zm15.075 12.25L7.625 4.3H19.2q.65 0 1.075.425.425.425.425 1.075v9.4q0 .45-.225.812-.225.363-.6.538Z"/>
    </Icon>
  );
});

IconMaterialDesktopAccessDisabledW100Filled.displayName = 'AmauiIconMaterialDesktopAccessDisabledW100Filled';

export default IconMaterialDesktopAccessDisabledW100Filled;
