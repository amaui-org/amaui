import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpload2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Upload2W100'

      short_name='Upload2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-28h536v28H212Zm181-148v-269H271l209-279 208 279H566v269H393Zm28-28h117v-270h92L480-782 329-578h92v270Zm59-270Z"/>
    </Icon>
  );
});

IconMaterialUpload2W100.displayName = 'AmauiIconMaterialUpload2W100';

export default IconMaterialUpload2W100;
