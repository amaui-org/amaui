import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplaceImage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplaceImage'

      short_name='ReplaceImage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-200h240l-79-103-58 69-39-52-64 86ZM240-80v-480h480v480H240Zm80-80h320v-320H320v320ZM140-640q38-109 131.5-174.5T480-880q82 0 155.5 35T760-746v-134h80v240H600v-80h76q-39-39-90-59.5T480-800q-81 0-149.5 43T227-640h-87Zm180 480v-320 320Z"/>
    </Icon>
  );
});

IconMaterialReplaceImage.displayName = 'AmauiIconMaterialReplaceImage';

export default IconMaterialReplaceImage;
