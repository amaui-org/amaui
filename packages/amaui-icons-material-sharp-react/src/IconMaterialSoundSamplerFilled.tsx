import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSoundSamplerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoundSamplerFilled'

      short_name='SoundSampler'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M169 829q-42-52-65.5-116.5T80 576q0-157 103.5-270T440 178v80q-120 14-200 104t-80 214q0 56 17 105.5t49 90.5l-57 57Zm311 147q-73 0-138-24t-117-67l56-57q41 32 91.5 50T480 896q57 0 107.5-18t91.5-50l56 57q-52 43-117 67t-138 24Zm311-147-57-57q32-41 49-90.5T800 576q0-124-80-214T520 258v-80q153 15 256.5 128T880 576q0 72-23.5 136.5T791 829Zm-411-73V396l280 180-280 180Z"/>
    </Icon>
  );
});

IconMaterialSoundSamplerFilled.displayName = 'AmauiIconMaterialSoundSamplerFilled';

export default IconMaterialSoundSamplerFilled;
