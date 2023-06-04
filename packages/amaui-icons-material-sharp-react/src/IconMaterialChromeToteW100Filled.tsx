import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeToteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeToteW100Filled'

      short_name='ChromeTote'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m560 608 123-123-19-20-90 89V351h-28v203l-90-89-19 20 123 123ZM193 923l-62-494 81-9v408h522v27l-541 68Zm99-175V212h536v536H292Z"/>
    </Icon>
  );
});

IconMaterialChromeToteW100Filled.displayName = 'AmauiIconMaterialChromeToteW100Filled';

export default IconMaterialChromeToteW100Filled;
