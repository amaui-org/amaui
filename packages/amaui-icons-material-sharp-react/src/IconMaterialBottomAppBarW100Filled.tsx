import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomAppBarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomAppBarW100Filled'

      short_name='BottomAppBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm308-168q25.5 0 42.75-17.25T540-400q0-25.5-17.25-42.75T480-460q-25.5 0-42.75 17.25T420-400q0 25.5 17.25 42.75T480-340Zm-280-34h196q-14-42 12.5-78t71.5-36q45 0 71.5 36t12.5 78h196v-386H200v386Z"/>
    </Icon>
  );
});

IconMaterialBottomAppBarW100Filled.displayName = 'AmauiIconMaterialBottomAppBarW100Filled';

export default IconMaterialBottomAppBarW100Filled;
