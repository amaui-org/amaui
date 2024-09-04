import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplaceAudio = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplaceAudio'

      short_name='ReplaceAudio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M140-640q38-109 131.5-174.5T480-880q82 0 155.5 35T760-746v-134h80v240H600v-80h76q-39-39-90-59.5T480-800q-81 0-149.5 43T227-640h-87ZM420-80q-58 0-99-41t-41-99q0-58 41-99t99-41q16 0 31 3t29 10v-213h200v80H560v260q0 58-41 99t-99 41Z"/>
    </Icon>
  );
});

IconMaterialReplaceAudio.displayName = 'AmauiIconMaterialReplaceAudio';

export default IconMaterialReplaceAudio;
