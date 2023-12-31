import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperGuideW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperGuideW100Filled'

      short_name='DeveloperGuide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm274-354 74-44 74 44v-234H506v234Z"/>
    </Icon>
  );
});

IconMaterialDeveloperGuideW100Filled.displayName = 'AmauiIconMaterialDeveloperGuideW100Filled';

export default IconMaterialDeveloperGuideW100Filled;
