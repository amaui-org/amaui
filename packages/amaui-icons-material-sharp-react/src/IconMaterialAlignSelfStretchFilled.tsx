import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignSelfStretchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSelfStretchFilled'

      short_name='AlignSelfStretch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 256v-80h800v80H80Zm0 720v-80h800v80H80Zm340-180V336h120v460H420Z"/>
    </Icon>
  );
});

IconMaterialAlignSelfStretchFilled.displayName = 'AmauiIconMaterialAlignSelfStretchFilled';

export default IconMaterialAlignSelfStretchFilled;
