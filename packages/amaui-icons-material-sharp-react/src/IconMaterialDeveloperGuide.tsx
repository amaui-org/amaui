import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperGuide = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperGuide'

      short_name='DeveloperGuide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-640v560h560v-560h-80v280l-100-60-100 60v-280H200Zm0 560v-560 560Z"/>
    </Icon>
  );
});

IconMaterialDeveloperGuide.displayName = 'AmauiIconMaterialDeveloperGuide';

export default IconMaterialDeveloperGuide;
