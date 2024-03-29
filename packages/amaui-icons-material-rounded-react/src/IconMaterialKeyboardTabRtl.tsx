import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardTabRtl = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabRtl'

      short_name='KeyboardTabRtl'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m393 616 116 116q12 12 11.5 28T508 788q-12 11-28 11.5T452 788L268 604q-12-12-12-28t12-28l184-184q11-11 27.5-11.5T508 364q11 11 11 28t-11 28L393 536h447q17 0 28.5 11.5T880 576q0 17-11.5 28.5T840 616H393ZM120 816q-17 0-28.5-11.5T80 776V376q0-17 11.5-28.5T120 336q17 0 28.5 11.5T160 376v400q0 17-11.5 28.5T120 816Z"/>
    </Icon>
  );
});

IconMaterialKeyboardTabRtl.displayName = 'AmauiIconMaterialKeyboardTabRtl';

export default IconMaterialKeyboardTabRtl;
