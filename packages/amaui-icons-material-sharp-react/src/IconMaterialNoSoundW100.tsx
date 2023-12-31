import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoSoundW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSoundW100'

      short_name='NoSound'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m584-356-20-20 104-104-104-104 20-20 104 104 104-104 20 20-104 104 104 104-20 20-104-104-104 104Zm-396-56v-136h130l126-126v388L318-412H188Zm228-194-86 86H216v80h114l86 86v-252ZM316-480Z"/>
    </Icon>
  );
});

IconMaterialNoSoundW100.displayName = 'AmauiIconMaterialNoSoundW100';

export default IconMaterialNoSoundW100;
