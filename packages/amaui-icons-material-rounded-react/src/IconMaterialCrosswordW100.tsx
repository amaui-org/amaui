import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrosswordW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CrosswordW100'

      short_name='Crossword'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-354v162q0 14 9 23t23 9h131q14 0 23-9t9-23v-162H382Zm-28-28v-195H192q-14 0-23 9t-9 23v131q0 14 9 23t23 9h162Zm28 0h195v-195H382v195Zm223 0h163q14 0 23-9t9-23v-163H605v195Zm0-223h195v-163q0-14-9-23t-23-9H637q-14 0-23 9t-9 23v163ZM354-354H192q-24.75 0-42.375-17.625T132-414v-131q0-24.75 17.625-42.375T192-605h385v-163q0-24.75 17.625-42.375T637-828h131q24.75 0 42.375 17.625T828-768v354q0 24.75-17.625 42.375T768-354H605v162q0 24.75-17.625 42.375T545-132H414q-24.75 0-42.375-17.625T354-192v-162Z"/>
    </Icon>
  );
});

IconMaterialCrosswordW100.displayName = 'AmauiIconMaterialCrosswordW100';

export default IconMaterialCrosswordW100;
