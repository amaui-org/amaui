import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifySpaceAround = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifySpaceAround'

      short_name='AlignJustifySpaceAround'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M800 976V176h80v800h-80Zm-720 0V176h80v800H80Zm520-200V376h120v400H600Zm-360 0V376h120v400H240Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifySpaceAround.displayName = 'AmauiIconMaterialAlignJustifySpaceAround';

export default IconMaterialAlignJustifySpaceAround;
