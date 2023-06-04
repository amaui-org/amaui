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
      <path d="m4.8 4.3.7.7H4v11h11.5L2.1 2.6l.5-.5 18.35 18.35-.5.5-4.25-4.25h-3.5v2h2v.7H9.3v-.7h2v-2h-8V4.3Zm15.075 12.25-.55-.55H20V5H8.325l-.7-.7H20.7v12.25Zm-6.05-6.05Zm-3.8.025Z"/>
    </Icon>
  );
});

IconMaterialDesktopAccessDisabledW100.displayName = 'AmauiIconMaterialDesktopAccessDisabledW100';

export default IconMaterialDesktopAccessDisabledW100;
