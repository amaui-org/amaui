import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomAppBarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomAppBarW100'

      short_name='BottomAppBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-174v146h560v-146H550q-12 17-30.325 25.5-18.324 8.5-39.5 8.5-21.175 0-39.675-8.5Q422-329 410-346H200Zm280 6q25.5 0 42.75-17.25T540-400q0-25.5-17.25-42.75T480-460q-25.5 0-42.75 17.25T420-400q0 25.5 17.25 42.75T480-340Zm-280-34h196q-14-42 12.5-78t71.5-36q45 0 71.5 36t12.5 78h196v-386H200v386Zm0 174h560-560Z"/>
    </Icon>
  );
});

IconMaterialBottomAppBarW100.displayName = 'AmauiIconMaterialBottomAppBarW100';

export default IconMaterialBottomAppBarW100;
