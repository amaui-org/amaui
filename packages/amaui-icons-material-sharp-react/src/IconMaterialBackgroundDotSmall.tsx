import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackgroundDotSmall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackgroundDotSmall'

      short_name='BackgroundDotSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-240q25 0 42.5-17.5T360-300q0-25-17.5-42.5T300-360q-25 0-42.5 17.5T240-300q0 25 17.5 42.5T300-240Zm0-360q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm0 180q25 0 42.5-17.5T360-480q0-25-17.5-42.5T300-540q-25 0-42.5 17.5T240-480q0 25 17.5 42.5T300-420Zm360 180q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm0-360q25 0 42.5-17.5T720-660q0-25-17.5-42.5T660-720q-25 0-42.5 17.5T600-660q0 25 17.5 42.5T660-600Zm0 180q25 0 42.5-17.5T720-480q0-25-17.5-42.5T660-540q-25 0-42.5 17.5T600-480q0 25 17.5 42.5T660-420ZM480-600q25 0 42.5-17.5T540-660q0-25-17.5-42.5T480-720q-25 0-42.5 17.5T420-660q0 25 17.5 42.5T480-600Zm0 360q25 0 42.5-17.5T540-300q0-25-17.5-42.5T480-360q-25 0-42.5 17.5T420-300q0 25 17.5 42.5T480-240Zm0-180q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialBackgroundDotSmall.displayName = 'AmauiIconMaterialBackgroundDotSmall';

export default IconMaterialBackgroundDotSmall;
