import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddAPhoto = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAPhoto'

      short_name='AddAPhoto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 18.5q1.875 0 3.188-1.312Q15.5 15.875 15.5 14q0-1.875-1.312-3.188Q12.875 9.5 11 9.5q-1.875 0-3.188 1.312Q6.5 12.125 6.5 14q0 1.875 1.312 3.188Q9.125 18.5 11 18.5ZM1 22V6h5.15L8 4h6v4H3v12h16v-9h2v11ZM19 8V6h-2V4h2V2h2v2h2v2h-2v2ZM3 20V8v12Z"/>
    </Icon>
  );
});

IconMaterialAddAPhoto.displayName = 'AmauiIconMaterialAddAPhoto';

export default IconMaterialAddAPhoto;
