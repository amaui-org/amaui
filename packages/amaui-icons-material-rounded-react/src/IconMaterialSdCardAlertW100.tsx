import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSdCardAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardAlertW100'

      short_name='SdCardAlert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13.55q.15 0 .25-.1t.1-.25V9.35q0-.15-.1-.25T12 9q-.15 0-.25.1t-.1.25v3.85q0 .15.1.25t.25.1ZM12 16q.275 0 .438-.188.162-.187.162-.412 0-.225-.162-.413-.163-.187-.438-.187t-.438.187q-.162.188-.162.413 0 .225.162.412.163.188.438.188Zm-5.2 4.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V9.175q0-.3.125-.588.125-.287.325-.487l4.35-4.35q.2-.2.488-.325.287-.125.587-.125H17.2q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h10.4q.3 0 .55-.25.25-.25.25-.55V4.8q0-.3-.25-.55Q17.5 4 17.2 4h-6.35L6 8.85V19.2q0 .3.25.55.25.25.55.25Zm0 0H6h12-.8Z"/>
    </Icon>
  );
});

IconMaterialSdCardAlertW100.displayName = 'AmauiIconMaterialSdCardAlertW100';

export default IconMaterialSdCardAlertW100;
