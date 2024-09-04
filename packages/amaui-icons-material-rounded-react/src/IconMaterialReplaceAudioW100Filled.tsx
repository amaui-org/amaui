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
      <path d="M758-600H626q-6 0-10-4t-4-10q0-6 4-10t10-4h112q-32-78-102.5-125T480-800q-90 0-162.5 51T216-614q-2 7-7 9t-10 0q-5-2-8-8t-1-11q32-92 111.5-148T480-828q91 0 166.5 49T760-648v-114q0-6 4-10t10-4q6 0 10 4t4 10v132q0 13-8.5 21.5T758-600ZM434-132q-42 0-71-29t-29-71q0-42 29-71t71-29q21 0 39.5 8.5T506-301v-199h148v28H534v240q0 42-29 71t-71 29Z"/>
    </Icon>
  );
});

IconMaterialReplaceAudioW100Filled.displayName = 'AmauiIconMaterialReplaceAudioW100Filled';

export default IconMaterialReplaceAudioW100Filled;
