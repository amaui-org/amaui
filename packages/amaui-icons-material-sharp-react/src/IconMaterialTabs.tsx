import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabs = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tabs'

      short_name='Tabs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-280H200v280Zm0-360h560v-200H200v200Zm280-80h240v-80H480v80Zm-280 80v-200 200Z"/>
    </Icon>
  );
});

IconMaterialTabs.displayName = 'AmauiIconMaterialTabs';

export default IconMaterialTabs;
