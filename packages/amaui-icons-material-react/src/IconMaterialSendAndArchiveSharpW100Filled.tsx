import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendAndArchiveSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendAndArchiveSharpW100Filled'
      short_name='SendAndArchive'

      {...props}
    >
      <path d="M16.75 19.225 19.4 16.575 18.9 16.075 17.1 17.875V13.775H16.4V17.875L14.6 16.075L14.1 16.575ZM4.55 18.1V13.15L9.75 12L4.55 10.85V5.8L16.225 10.825Q16.225 10.825 16.225 10.825Q16.225 10.825 16.225 10.825Q14.35 11.05 12.9 12.225Q11.45 13.4 11.2 15.225Q11.2 15.225 11.2 15.225Q11.2 15.225 11.2 15.225ZM16.75 20.2Q15.2 20.2 14.125 19.125Q13.05 18.05 13.05 16.5Q13.05 14.95 14.125 13.875Q15.2 12.8 16.75 12.8Q18.3 12.8 19.375 13.875Q20.45 14.95 20.45 16.5Q20.45 18.05 19.375 19.125Q18.3 20.2 16.75 20.2Z"/>
    </Icon>
  );
});

IconMaterialSendAndArchiveSharpW100Filled.displayName = 'AmauiIconMaterialSendAndArchiveSharpW100Filled';

export default IconMaterialSendAndArchiveSharpW100Filled;
