import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchVibrationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchVibrationW100Filled'

      short_name='WatchVibration'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M189-312q-22-37-33.5-79.5T144-480q0-46 12-88.5t33-79.5l24 14q-20 34-30.5 73T172-480q0 42 10.5 81t30.5 73l-24 14Zm582 0-24-14q20-34 30.5-73t10.5-81q0-42-10.5-81T747-634l24-14q22 37 33.5 79.5T816-480q0 46-11.5 88.5T771-312ZM410-132l-42-150q-51-27-83.5-80T252-480q0-65 32.5-118t83.5-80l42-150h140l42 150q51 27 83.5 80T708-480q0 65-32.5 118T592-282l-42 150H410Zm70-148q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialWatchVibrationW100Filled.displayName = 'AmauiIconMaterialWatchVibrationW100Filled';

export default IconMaterialWatchVibrationW100Filled;
