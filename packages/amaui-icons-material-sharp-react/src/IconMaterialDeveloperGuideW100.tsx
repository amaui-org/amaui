import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperGuideW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperGuideW100'

      short_name='DeveloperGuide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-588v560h560v-560H654v234l-74-44-74 44v-234H200Zm0 560v-560 560Z"/>
    </Icon>
  );
});

IconMaterialDeveloperGuideW100.displayName = 'AmauiIconMaterialDeveloperGuideW100';

export default IconMaterialDeveloperGuideW100;
