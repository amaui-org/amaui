import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplaceVideoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplaceVideoFilled'

      short_name='ReplaceVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M140-640q38-109 131.5-174.5T480-880q82 0 155.5 35T760-746v-134h80v240H600v-80h76q-39-39-90-59.5T480-800q-81 0-149.5 43T227-640h-87Zm60 560v-480h480v200l120-120v320L680-280v200H200Z"/>
    </Icon>
  );
});

IconMaterialReplaceVideoFilled.displayName = 'AmauiIconMaterialReplaceVideoFilled';

export default IconMaterialReplaceVideoFilled;
