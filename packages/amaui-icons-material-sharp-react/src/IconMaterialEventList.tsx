import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventList = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventList'

      short_name='EventList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-120v-320h320v320H560Zm80-80h160v-160H640v160ZM80-240v-80h360v80H80Zm480-280v-320h320v320H560Zm80-80h160v-160H640v160ZM80-640v-80h360v80H80Zm640 360Zm0-400Z"/>
    </Icon>
  );
});

IconMaterialEventList.displayName = 'AmauiIconMaterialEventList';

export default IconMaterialEventList;
