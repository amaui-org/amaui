import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShareWindowsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareWindowsW100'

      short_name='ShareWindows'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-386v-268h428L605-783l20-20 163 163-163 164-20-20 129-130H334v240h-28ZM172-172v-596h28v568h480v-186h28v214H172Z"/>
    </Icon>
  );
});

IconMaterialShareWindowsW100.displayName = 'AmauiIconMaterialShareWindowsW100';

export default IconMaterialShareWindowsW100;
