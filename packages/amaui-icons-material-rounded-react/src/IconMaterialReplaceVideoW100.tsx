import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplaceVideoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplaceVideoW100'

      short_name='ReplaceVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-160h256q14 0 23-9t9-23v-256q0-14-9-23t-23-9H332q-14 0-23 9t-9 23v256q0 14 9 23t23 9Zm-32 0v-320 320Zm32 28q-25 0-42.5-17.5T272-192v-256q0-25 17.5-42.5T332-508h256q25 0 42.5 17.5T648-448v114l74-74q7-7 16.5-3t9.5 14v155q0 10-9.5 13.5T722-232l-74-74v114q0 25-17.5 42.5T588-132H332Zm426-468H626q-6 0-10-4t-4-10q0-6 4-10t10-4h112q-32-78-102.5-125T480-800q-90 0-162.5 51T216-614q-2 7-7 9t-10 0q-5-2-8-8t-1-11q32-92 111.5-148T480-828q91 0 166.5 49T760-648v-114q0-6 4-10t10-4q6 0 10 4t4 10v132q0 13-8.5 21.5T758-600Z"/>
    </Icon>
  );
});

IconMaterialReplaceVideoW100.displayName = 'AmauiIconMaterialReplaceVideoW100';

export default IconMaterialReplaceVideoW100;
