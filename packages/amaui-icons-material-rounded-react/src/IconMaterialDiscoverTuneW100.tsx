import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiscoverTuneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiscoverTuneW100'

      short_name='DiscoverTune'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.65 8.35v-.7h3v-4h.7v4h3v.7Zm3 12v-8.7h.7v8.7Zm-10 0v-4h-3v-.7h6.7v.7h-3v4Zm0-8v-8.7h.7v8.7Z"/>
    </Icon>
  );
});

IconMaterialDiscoverTuneW100.displayName = 'AmauiIconMaterialDiscoverTuneW100';

export default IconMaterialDiscoverTuneW100;
