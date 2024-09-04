import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplaceImageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplaceImageFilled'

      short_name='ReplaceImage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-200h240l-79-103-58 69-39-52-64 86ZM240-80v-480h480v480H240ZM140-640q38-109 131.5-174.5T480-880q82 0 155.5 35T760-746v-134h80v240H600v-80h76q-39-39-90-59.5T480-800q-81 0-149.5 43T227-640h-87Z"/>
    </Icon>
  );
});

IconMaterialReplaceImageFilled.displayName = 'AmauiIconMaterialReplaceImageFilled';

export default IconMaterialReplaceImageFilled;
