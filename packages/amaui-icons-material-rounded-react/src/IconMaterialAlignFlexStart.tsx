import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignFlexStart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexStart'

      short_name='AlignFlexStart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 256q-17 0-28.5-11.5T80 216q0-17 11.5-28.5T120 176h720q17 0 28.5 11.5T880 216q0 17-11.5 28.5T840 256H120Zm340 640q-17 0-28.5-11.5T420 856V376q0-17 11.5-28.5T460 336h40q17 0 28.5 11.5T540 376v480q0 17-11.5 28.5T500 896h-40Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexStart.displayName = 'AmauiIconMaterialAlignFlexStart';

export default IconMaterialAlignFlexStart;
