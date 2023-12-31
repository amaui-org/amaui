import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonEditW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonEditW100Filled'

      short_name='PersonEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M572-202v-23q0-12.444 5-23.722T590-268l193-192q5-4 9.889-6 4.889-2 9.778-2 5.333 0 10.656 2 5.322 2 9.677 6l37 38q4 5 6 10t2 10q0 5-1.5 10t-6.5 10L668-190q-8 8-19.278 13-11.278 5-23.722 5h-23q-12.75 0-21.375-8.625T572-202Zm-360-60v-22q0-22 13.5-41.5T262-356q55-26 109.5-39T480-408q24 0 48.5 3t49.5 8l-79 79q-13.114 12.8-20.057 29.365Q472-272.071 472-254v22H242q-12.75 0-21.375-8.625T212-262Zm591-102 37-38-37-38-38 38 38 38ZM480-512q-44.55 0-76.275-31.725Q372-575.45 372-620q0-44.55 31.725-76.275Q435.45-728 480-728q44.55 0 76.275 31.725Q588-664.55 588-620q0 44.55-31.725 76.275Q524.55-512 480-512Z"/>
    </Icon>
  );
});

IconMaterialPersonEditW100Filled.displayName = 'AmauiIconMaterialPersonEditW100Filled';

export default IconMaterialPersonEditW100Filled;
