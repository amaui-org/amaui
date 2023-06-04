import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureAsPdfW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureAsPdfW100'

      short_name='PictureAsPdf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.55 12.35h.7v-2h1.3q.3 0 .5-.2t.2-.5v-1.3q0-.3-.2-.5t-.5-.2h-2Zm.7-2.7v-1.3h1.3v1.3Zm3.05 2.7h1.9q.3 0 .5-.2t.2-.5v-3.3q0-.3-.2-.5t-.5-.2h-1.9Zm.7-.7v-3.3h1.2v3.3Zm3.2.7h.7v-2h1.5v-.7h-1.5v-1.3h1.5v-.7h-2.2ZM6.65 16.7V3.3h13.4v13.4Zm.7-.7h12V4h-12Zm-3.4 3.4V6.8h.7v11.9h11.9v.7Zm3.4-3.4V4v12Z"/>
    </Icon>
  );
});

IconMaterialPictureAsPdfW100.displayName = 'AmauiIconMaterialPictureAsPdfW100';

export default IconMaterialPictureAsPdfW100;
