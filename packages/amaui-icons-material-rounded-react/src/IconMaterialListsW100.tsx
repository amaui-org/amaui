import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialListsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListsW100'

      short_name='Lists'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M342-212q-13 0-21.5-8.5T312-242q0-13 8.5-21.5T342-272h456q13 0 21.5 8.5T828-242q0 13-8.5 21.5T798-212H342Zm0-238q-13 0-21.5-8.5T312-480q0-13 8.5-21.5T342-510h456q13 0 21.5 8.5T828-480q0 13-8.5 21.5T798-450H342Zm0-238q-13 0-21.5-8.5T312-718q0-13 8.5-21.5T342-748h456q13 0 21.5 8.5T828-718q0 13-8.5 21.5T798-688H342Zm-180 0q-13 0-21.5-8.5T132-718q0-13 8.5-21.5T162-748q13 0 21.5 8.5T192-718q0 13-8.5 21.5T162-688Zm0 238q-13 0-21.5-8.5T132-480q0-13 8.5-21.5T162-510q13 0 21.5 8.5T192-480q0 13-8.5 21.5T162-450Zm0 238q-13 0-21.5-8.5T132-242q0-13 8.5-21.5T162-272q13 0 21.5 8.5T192-242q0 13-8.5 21.5T162-212Z"/>
    </Icon>
  );
});

IconMaterialListsW100.displayName = 'AmauiIconMaterialListsW100';

export default IconMaterialListsW100;
