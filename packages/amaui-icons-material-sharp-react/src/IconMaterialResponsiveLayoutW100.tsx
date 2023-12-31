import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResponsiveLayoutW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResponsiveLayoutW100'

      short_name='ResponsiveLayout'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-416h200v-200h416v616H172Zm416-28h172v-560H400v172h188v388Zm-188 0h160v-360H400v360Zm-200 0h172v-360H200v360Zm388-388v28-28Zm-216 28Zm188 0Zm28-28Z"/>
    </Icon>
  );
});

IconMaterialResponsiveLayoutW100.displayName = 'AmauiIconMaterialResponsiveLayoutW100';

export default IconMaterialResponsiveLayoutW100;
