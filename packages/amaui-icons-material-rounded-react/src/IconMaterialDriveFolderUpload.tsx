import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveFolderUpload = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFolderUpload'

      short_name='DriveFolderUpload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-3.2l.9.9q.15.15.325.212.175.063.375.063t.375-.063q.175-.062.325-.212.275-.275.275-.7 0-.425-.275-.7l-2.6-2.6q-.3-.3-.7-.3-.4 0-.7.3l-2.6 2.6q-.275.275-.275.7 0 .425.275.7.275.275.7.275.425 0 .7-.275l.9-.9V16q0 .425.288.712.287.288.712.288Zm-8 3q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h5.175q.4 0 .763.15.362.15.637.425L12 6h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12Z"/>
    </Icon>
  );
});

IconMaterialDriveFolderUpload.displayName = 'AmauiIconMaterialDriveFolderUpload';

export default IconMaterialDriveFolderUpload;
