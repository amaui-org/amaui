import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubdirectoryArrowLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowLeftW100'

      short_name='SubdirectoryArrowLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 20.1 4.9 15 10 9.9l.5.5-4.25 4.25h11.4v-10h.7v10.7H6.25l4.25 4.25Z"/>
    </Icon>
  );
});

IconMaterialSubdirectoryArrowLeftW100.displayName = 'AmauiIconMaterialSubdirectoryArrowLeftW100';

export default IconMaterialSubdirectoryArrowLeftW100;
