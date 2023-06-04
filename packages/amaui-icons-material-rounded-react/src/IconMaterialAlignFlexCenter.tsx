import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignFlexCenter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexCenter'

      short_name='AlignFlexCenter'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-17 0-28.5-11.5T440 936V636H160q-17 0-28.5-11.5T120 596v-40q0-17 11.5-28.5T160 516h280V216q0-17 11.5-28.5T480 176q17 0 28.5 11.5T520 216v300h280q17 0 28.5 11.5T840 556v40q0 17-11.5 28.5T800 636H520v300q0 17-11.5 28.5T480 976Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexCenter.displayName = 'AmauiIconMaterialAlignFlexCenter';

export default IconMaterialAlignFlexCenter;
