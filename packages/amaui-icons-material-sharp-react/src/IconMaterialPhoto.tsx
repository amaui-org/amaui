import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoto = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Photo'

      short_name='Photo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17h12l-3.75-5-3 4L9 13Zm-3 4V3h18v18Zm2-2h14V5H5ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterialPhoto.displayName = 'AmauiIconMaterialPhoto';

export default IconMaterialPhoto;
