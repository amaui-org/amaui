import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotTabletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotTabletW100'

      short_name='ScreenshotTablet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-212v-536h776v536H92Zm94-508h-66v480h66v-480Zm28 480h532v-480H214v480Zm560-480v480h66v-480h-66Zm0 0h66-66Zm-588 0h-66 66Zm382 420h118v-118h-28v90h-90v28ZM274-542h28v-90h90v-28H274v118Z"/>
    </Icon>
  );
});

IconMaterialScreenshotTabletW100.displayName = 'AmauiIconMaterialScreenshotTabletW100';

export default IconMaterialScreenshotTabletW100;
