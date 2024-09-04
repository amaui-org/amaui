import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplaceVideoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplaceVideoW100Filled'

      short_name='ReplaceVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-132q-24.75 0-42.37-17.63Q272-167.25 272-192v-256q0-24.75 17.63-42.38Q307.25-508 332-508h256q24.75 0 42.38 17.62Q648-472.75 648-448v114l74-74q7-7 16.5-3.25T748-397v155.35q0 9.71-9.5 13.18Q729-225 722-232l-74-74v114q0 24.75-17.62 42.37Q612.75-132 588-132H332Zm426-468H626q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h112q-32-78-102.5-125T480-800q-90 0-162.5 51T216-614q-2 7-7 9t-10 0q-5-2-8-8t-1-11q32-92 111.5-148T480-828q91 0 166.5 49T760-648v-114q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v132q0 12.75-8.62 21.37Q770.75-600 758-600Z"/>
    </Icon>
  );
});

IconMaterialReplaceVideoW100Filled.displayName = 'AmauiIconMaterialReplaceVideoW100Filled';

export default IconMaterialReplaceVideoW100Filled;
