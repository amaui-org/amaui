import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifySpaceBetween = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifySpaceBetween'

      short_name='AlignJustifySpaceBetween'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M800 976V776H680V376h120V176h80v800h-80Zm-720 0V176h80v200h120v400H160v200H80Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifySpaceBetween.displayName = 'AmauiIconMaterialAlignJustifySpaceBetween';

export default IconMaterialAlignJustifySpaceBetween;
