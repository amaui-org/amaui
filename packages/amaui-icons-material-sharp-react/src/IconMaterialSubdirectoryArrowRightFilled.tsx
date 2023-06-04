import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubdirectoryArrowRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowRightFilled'

      short_name='SubdirectoryArrowRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14 21-1.4-1.425L16.175 16H5V4h2v10h9.175l-3.6-3.6L14 8.975 20 15Z"/>
    </Icon>
  );
});

IconMaterialSubdirectoryArrowRightFilled.displayName = 'AmauiIconMaterialSubdirectoryArrowRightFilled';

export default IconMaterialSubdirectoryArrowRightFilled;
