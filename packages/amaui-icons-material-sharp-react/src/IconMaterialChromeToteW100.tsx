import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeToteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeToteW100'

      short_name='ChromeTote'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M724 828h10v27l-541 68-62-494 81-9v28l-48 6 54 438 506-64Zm-432-80V212h536v536H292Zm28-28h480V240H320v480ZM218 892Zm102-172V240v480Zm240-112 123-123-19-20-90 89V351h-28v203l-90-89-19 20 123 123Z"/>
    </Icon>
  );
});

IconMaterialChromeToteW100.displayName = 'AmauiIconMaterialChromeToteW100';

export default IconMaterialChromeToteW100;
