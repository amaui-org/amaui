import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatSizeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatSizeFilled'

      short_name='FormatSize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 20V7H9V4h13v3h-5v13Zm-9 0v-8H2V9h9v3H8v8Z"/>
    </Icon>
  );
});

IconMaterialFormatSizeFilled.displayName = 'AmauiIconMaterialFormatSizeFilled';

export default IconMaterialFormatSizeFilled;
