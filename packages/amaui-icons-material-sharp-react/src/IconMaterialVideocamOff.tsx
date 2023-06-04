import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideocamOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamOff'

      short_name='VideocamOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m22 17.5-4-4v1.675l-2-2V6H8.825l-2-2H18v6.5l4-4Zm-9.55-7.875ZM9.55 12.4Zm11 10.95L.65 3.45l1.4-1.4 19.9 19.9ZM4 4l2 2H4v12h12v-2l2 2v2H2V4Z"/>
    </Icon>
  );
});

IconMaterialVideocamOff.displayName = 'AmauiIconMaterialVideocamOff';

export default IconMaterialVideocamOff;
