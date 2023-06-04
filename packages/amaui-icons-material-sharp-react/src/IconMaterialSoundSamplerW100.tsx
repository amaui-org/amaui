import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSoundSamplerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoundSamplerW100'

      short_name='SoundSampler'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M207 791q-35-45-55-99.5T132 576q0-134 88.5-232.5T440 230v28q-119 15-199.5 105T160 576q0 56 17 105.5t49 90.5l-19 19Zm273 133q-62 0-117.5-20T262 848l20-20q41 32 91 50t107 18q57 0 107-18.5t92-50.5l20 20q-45 36-100.5 56.5T480 924Zm274-134-20-20q31-41 48.5-90T800 576q0-123-80-212T522 259v-28q130 16 218 113.5T828 576q0 61-19.5 115T754 790Zm-348-82V444l206 132-206 132Z"/>
    </Icon>
  );
});

IconMaterialSoundSamplerW100.displayName = 'AmauiIconMaterialSoundSamplerW100';

export default IconMaterialSoundSamplerW100;
