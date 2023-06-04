import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddPhotoAlternate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddPhotoAlternate'

      short_name='AddPhotoAlternate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h11v2H5v14h14v-9h2v11ZM17 9V7h-2V5h2V3h2v2h2v2h-2v2ZM6 17h12l-3.75-5-3 4L9 13Zm-1-6v8V5v6Z"/>
    </Icon>
  );
});

IconMaterialAddPhotoAlternate.displayName = 'AmauiIconMaterialAddPhotoAlternate';

export default IconMaterialAddPhotoAlternate;
