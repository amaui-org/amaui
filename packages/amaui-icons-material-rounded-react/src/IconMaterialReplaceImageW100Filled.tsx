import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplaceImageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplaceImageW100Filled'

      short_name='ReplaceImage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m466-248-19-25q-5-6-12-6t-12 6l-21 29q-5 8-1 16t13 8h132q9 0 13-8t-1-16l-34-44q-5-6-11.5-6t-11.5 5l-35 41ZM352-132q-25 0-42.5-17.5T292-192v-256q0-25 17.5-42.5T352-508h256q25 0 42.5 17.5T668-448v256q0 25-17.5 42.5T608-132H352Zm406-468H626q-6 0-10-4t-4-10q0-6 4-10t10-4h112q-32-78-102.5-125T480-800q-90 0-162.5 51T216-614q-2 7-7 9t-10 0q-5-2-8-8t-1-11q32-92 111.5-148T480-828q91 0 166.5 49T760-648v-114q0-6 4-10t10-4q6 0 10 4t4 10v132q0 13-8.5 21.5T758-600Z"/>
    </Icon>
  );
});

IconMaterialReplaceImageW100Filled.displayName = 'AmauiIconMaterialReplaceImageW100Filled';

export default IconMaterialReplaceImageW100Filled;
