import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoSoundW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSoundW100Filled'

      short_name='NoSound'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m584-356-20-20 104-104-104-104 20-20 104 104 104-104 20 20-104 104 104 104-20 20-104-104-104 104Zm-396-56v-136h130l126-126v388L318-412H188Z"/>
    </Icon>
  );
});

IconMaterialNoSoundW100Filled.displayName = 'AmauiIconMaterialNoSoundW100Filled';

export default IconMaterialNoSoundW100Filled;
