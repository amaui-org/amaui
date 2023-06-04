import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSoundDetectionLoudSoundW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoundDetectionLoudSoundW100Filled'

      short_name='SoundDetectionLoudSound'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.875 16.05h-3.1L9.15 18.675q-.425.425-1.062.425-.638 0-1.063-.425l-1.7-1.7Q4.9 16.55 4.9 15.913q0-.638.425-1.063l2.625-2.6V9.125ZM8.425 5.425q2.225-1.05 4.625-.7 2.4.35 4.125 2.075t2.075 4.125q.35 2.4-.7 4.625l-.55-.525q.9-1.975.55-4.087-.35-2.113-1.875-3.638t-3.637-1.875q-2.113-.35-4.088.55ZM10.95 7.95q1.1-.2 2.15.087 1.05.288 1.825 1.063.775.775 1.063 1.825.287 1.05.062 2.125l-.6-.6q.05-.8-.2-1.538-.25-.737-.825-1.312-.575-.575-1.312-.838-.738-.262-1.538-.162Z"/>
    </Icon>
  );
});

IconMaterialSoundDetectionLoudSoundW100Filled.displayName = 'AmauiIconMaterialSoundDetectionLoudSoundW100Filled';

export default IconMaterialSoundDetectionLoudSoundW100Filled;
