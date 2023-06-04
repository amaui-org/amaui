import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageFilled'

      short_name='Image'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17h12l-3.75-5-3 4L9 13Zm-3 4V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialImageFilled.displayName = 'AmauiIconMaterialImageFilled';

export default IconMaterialImageFilled;
