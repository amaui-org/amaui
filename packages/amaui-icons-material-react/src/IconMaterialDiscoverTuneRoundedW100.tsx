import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDiscoverTuneRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiscoverTuneRoundedW100'
      short_name='DiscoverTune'

      {...props}
    >
      <path d="M13.65 8.35V7.65H16.65V3.65H17.35V7.65H20.35V8.35ZM16.65 20.35V11.65H17.35V20.35ZM6.65 20.35V16.35H3.65V15.65H10.35V16.35H7.35V20.35ZM6.65 12.35V3.65H7.35V12.35Z"/>
    </Icon>
  );
});

IconMaterialDiscoverTuneRoundedW100.displayName = 'AmauiIconMaterialDiscoverTuneRoundedW100';

export default IconMaterialDiscoverTuneRoundedW100;
