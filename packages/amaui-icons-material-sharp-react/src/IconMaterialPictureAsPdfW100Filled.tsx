import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureAsPdfW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureAsPdfW100Filled'

      short_name='PictureAsPdf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.55 12.35h.7v-2h1.3q.3 0 .5-.2t.2-.5v-1.3q0-.3-.2-.5t-.5-.2h-2Zm.7-2.7v-1.3h1.3v1.3Zm3.05 2.7h1.9q.3 0 .5-.2t.2-.5v-3.3q0-.3-.2-.5t-.5-.2h-1.9Zm.7-.7v-3.3h1.2v3.3Zm3.2.7h.7v-2h1.5v-.7h-1.5v-1.3h1.5v-.7h-2.2ZM6.65 16.7V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7Z"/>
    </Icon>
  );
});

IconMaterialPictureAsPdfW100Filled.displayName = 'AmauiIconMaterialPictureAsPdfW100Filled';

export default IconMaterialPictureAsPdfW100Filled;
