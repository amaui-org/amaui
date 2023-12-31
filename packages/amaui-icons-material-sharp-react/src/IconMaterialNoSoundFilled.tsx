import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoSoundFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSoundFilled'

      short_name='NoSound'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m616-320-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104-104 104Zm-496-40v-240h160l200-200v640L280-360H120Z"/>
    </Icon>
  );
});

IconMaterialNoSoundFilled.displayName = 'AmauiIconMaterialNoSoundFilled';

export default IconMaterialNoSoundFilled;
