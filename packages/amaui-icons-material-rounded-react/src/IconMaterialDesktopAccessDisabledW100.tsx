import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopAccessDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopAccessDisabledW100'

      short_name='DesktopAccessDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.8 4.3.7.7h-.7q-.3 0-.55.25Q4 5.5 4 5.8v9.4q0 .35.225.575Q4.45 16 4.8 16h10.7L2.35 2.85q-.1-.1-.113-.238-.012-.137.113-.262t.25-.125q.125 0 .25.125L20.7 20.2q.1.1.112.238.013.137-.112.262t-.25.125q-.125 0-.25-.125l-4-4h-3.5v2h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-4.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65v-2H4.8q-.65 0-1.075-.425Q3.3 15.85 3.3 15.2V5.8q0-.65.425-1.075Q4.15 4.3 4.8 4.3Zm15.075 12.25-.55-.55q.25-.05.463-.25.212-.2.212-.55V5.8q0-.35-.225-.575Q19.55 5 19.2 5H8.325l-.7-.7H19.2q.65 0 1.075.425.425.425.425 1.075v9.4q0 .45-.225.812-.225.363-.6.538Zm-6.05-6.05Zm-3.8.025Z"/>
    </Icon>
  );
});

IconMaterialDesktopAccessDisabledW100.displayName = 'AmauiIconMaterialDesktopAccessDisabledW100';

export default IconMaterialDesktopAccessDisabledW100;
