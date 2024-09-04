import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplaceAudioW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplaceAudioW100Filled'

      short_name='ReplaceAudio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M183-600q27-101 109.5-164.5T480-828q91 0 166.5 49T760-648v-128h28v176H612v-28h126q-32-78-102.5-125T480-800q-94 0-168 55T212-600h-29Zm251 468q-42 0-71-29t-29-71q0-42 29-71t71-29q21 0 39.5 8.5T506-301v-199h148v28H534v240q0 42-29 71t-71 29Z"/>
    </Icon>
  );
});

IconMaterialReplaceAudioW100Filled.displayName = 'AmauiIconMaterialReplaceAudioW100Filled';

export default IconMaterialReplaceAudioW100Filled;
