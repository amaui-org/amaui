import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchCheckW100Filled'

      short_name='WatchCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-390-77-76 20-20 57 57 141-141 20 19-161 161Zm-28 258-42-150q-51-27-83.5-80T252-480q0-65 32.5-118t83.5-80l42-150h140l42 150q51 27 83.5 80T708-480q0 65-32.5 118T592-282l-42 150H410Zm70-148q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialWatchCheckW100Filled.displayName = 'AmauiIconMaterialWatchCheckW100Filled';

export default IconMaterialWatchCheckW100Filled;
