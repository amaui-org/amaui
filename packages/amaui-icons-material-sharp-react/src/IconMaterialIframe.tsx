import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIframe = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Iframe'

      short_name='Iframe'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M460 636h200v-80H460v80Zm-60 60V496h320v200H400ZM80 896V256h800v640H80Zm80-80h640V416H160v400Z"/>
    </Icon>
  );
});

IconMaterialIframe.displayName = 'AmauiIconMaterialIframe';

export default IconMaterialIframe;
