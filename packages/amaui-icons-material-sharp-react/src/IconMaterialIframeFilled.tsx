import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIframeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IframeFilled'

      short_name='Iframe'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M400 696V496h320v200H400ZM80 896V256h800v640H80Zm80-80h640V416H160v400Z"/>
    </Icon>
  );
});

IconMaterialIframeFilled.displayName = 'AmauiIconMaterialIframeFilled';

export default IconMaterialIframeFilled;
