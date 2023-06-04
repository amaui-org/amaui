import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddPhotoAlternateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddPhotoAlternateFilled'

      short_name='AddPhotoAlternate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 9V7h-2V5h2V3h2v2h2v2h-2v2ZM6 17h12l-3.75-5-3 4L9 13Zm-3 4V3h10v6h2v2h6v10Z"/>
    </Icon>
  );
});

IconMaterialAddPhotoAlternateFilled.displayName = 'AmauiIconMaterialAddPhotoAlternateFilled';

export default IconMaterialAddPhotoAlternateFilled;
