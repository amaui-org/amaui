import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSoundSamplerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoundSamplerW100Filled'

      short_name='SoundSampler'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 576q0-129 82-225t205-118q8-2 14.5.5T440 244q0 8-5.5 11.5T421 261q-112 21-186.5 109T160 576q0 51 14.5 97.5T216 759q5 6 5 12t-5 11q-5 5-10 3t-9-7q-31-43-48-94t-17-108Zm348 348q-57 0-108.5-17T277 859q-6-5-8-10.5t3-10.5q5-5 11-4.5t12 4.5q39 28 86 43t99 15q52 0 99-15.5t87-43.5q6-4 12-4.5t11 4.5q5 5 3 10.5t-8 10.5q-44 31-95.5 48.5T480 924Zm348-348q0 57-16.5 107.5T765 776q-5 6-10.5 7.5T744 780q-5-5-5-11t5-12q26-39 41-84.5t15-96.5q0-118-73.5-205T541 262q-8-2-13.5-5.5T522 245q0-8 6-10.5t14-.5q122 23 204 118t82 224ZM406 681V471q0-9 7.5-13t15.5 1l163 104q7 5 7 13t-7 13L429 693q-8 5-15.5 1t-7.5-13Z"/>
    </Icon>
  );
});

IconMaterialSoundSamplerW100Filled.displayName = 'AmauiIconMaterialSoundSamplerW100Filled';

export default IconMaterialSoundSamplerW100Filled;
