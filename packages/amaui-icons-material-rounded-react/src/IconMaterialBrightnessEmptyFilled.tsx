import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightnessEmptyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessEmptyFilled'

      short_name='BrightnessEmpty'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M452 1000 346 896H200q-17 0-28.5-11.5T160 856V710L56 604q-11-12-11-28t11-28l104-106V296q0-17 11.5-28.5T200 256h146l106-104q12-11 28-11t28 11l106 104h146q17 0 28.5 11.5T800 296v146l104 106q11 12 11 28t-11 28L800 710v146q0 17-11.5 28.5T760 896H614l-106 104q-12 11-28 11t-28-11Z"/>
    </Icon>
  );
});

IconMaterialBrightnessEmptyFilled.displayName = 'AmauiIconMaterialBrightnessEmptyFilled';

export default IconMaterialBrightnessEmptyFilled;
