import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchCheckW100'

      short_name='WatchCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M432-800h96-96Zm0 640h96-96Zm-22 28-42-150q-51-27-83.5-80T252-480q0-65 32.5-118t83.5-80l42-150h140l42 150q51 27 83.5 80T708-480q0 65-32.5 118T592-282l-42 150H410Zm70-148q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm-78-414q21-7 40-10.5t38-3.5q19 0 38 3.5t40 10.5l-30-106h-96l-30 106Zm30 534h96l30-106q-21 7-40 10t-38 3q-19 0-38-3t-40-10l30 106Zm6-230-77-76 20-20 57 57 141-141 20 19-161 161Z"/>
    </Icon>
  );
});

IconMaterialWatchCheckW100.displayName = 'AmauiIconMaterialWatchCheckW100';

export default IconMaterialWatchCheckW100;
