import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Width'

      short_name='Width'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m273 616 36 36q11 11 11 27.5T308 708q-11 11-28 11t-28-11L148 604q-12-12-12-28t12-28l104-104q11-11 27.5-11t28.5 11q12 12 12 28.5T308 501l-35 35h414l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L708 708q-11 11-27.5 11.5T652 708q-11-11-11-28t11-28l35-36H273Z"/>
    </Icon>
  );
});

IconMaterialWidth.displayName = 'AmauiIconMaterialWidth';

export default IconMaterialWidth;
