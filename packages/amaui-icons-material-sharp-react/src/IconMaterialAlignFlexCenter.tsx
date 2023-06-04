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
      <path d="M440 976V636H120V516h320V176h80v340h320v120H520v340h-80Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexCenter.displayName = 'AmauiIconMaterialAlignFlexCenter';

export default IconMaterialAlignFlexCenter;
