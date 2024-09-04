import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchCheckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchCheckFilled'

      short_name='WatchCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-466 113-113q12-12 28-12t28 12q12 12 12 28.5T607-522L466-381q-12 12-28.5 12T409-381l-56-57q-12-12-12-28t12-28q12-12 28-11.5t28 11.5l29 28ZM420-80q-26 0-47.5-15.5T343-137l-23-77q-6-20-18.5-40.5T269-297q-34-37-51.5-84T200-480q0-51 17.5-98t51.5-85q20-23 32.5-43t18.5-40l23-77q8-26 29.5-41.5T420-880h120q26 0 47.5 15.5T617-823l23 77q6 20 18.5 40.5T691-663q34 37 51.5 84t17.5 99q0 51-17.5 98T691-297q-20 23-32.5 43T640-214l-23 77q-8 26-29.5 41.5T540-80H420Zm60-200q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialWatchCheckFilled.displayName = 'AmauiIconMaterialWatchCheckFilled';

export default IconMaterialWatchCheckFilled;
