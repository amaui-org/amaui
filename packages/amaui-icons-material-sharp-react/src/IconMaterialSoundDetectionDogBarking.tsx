import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSoundDetectionDogBarking = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoundDetectionDogBarking'

      short_name='SoundDetectionDogBarking'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22v-9.6l-.275-.275q-.275-.3-.425-.675-.15-.375-.15-.75 0-.4.15-.762.15-.363.425-.638L8 6h4l4-4 2.05 2.05q1.05 1.025 1.55 2.312.5 1.288.5 2.638 0 1.35-.5 2.625t-1.55 2.325L16 16v6Zm2-2h7v-4.825l2.625-2.625q.725-.725 1.1-1.663Q18.1 9.95 18.1 9t-.375-1.875q-.375-.925-1.1-1.65L16 4.825 12.825 8h-4l-.575.575 1.675 1.675q.725.725 1.1 1.65.375.925.375 1.875t-.375 1.888q-.375.937-1.1 1.662L7 14.4Z"/>
    </Icon>
  );
});

IconMaterialSoundDetectionDogBarking.displayName = 'AmauiIconMaterialSoundDetectionDogBarking';

export default IconMaterialSoundDetectionDogBarking;
