import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpload2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Upload2W100Filled'

      short_name='Upload2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-28h536v28H212Zm181-148v-269H271l209-279 208 279H566v269H393Z"/>
    </Icon>
  );
});

IconMaterialUpload2W100Filled.displayName = 'AmauiIconMaterialUpload2W100Filled';

export default IconMaterialUpload2W100Filled;
