import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifySpaceEvenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifySpaceEvenFilled'

      short_name='AlignJustifySpaceEven'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M800 976V176h80v800h-80Zm-720 0V176h80v800H80Zm480-200V376h120v400H560Zm-280 0V376h120v400H280Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifySpaceEvenFilled.displayName = 'AmauiIconMaterialAlignJustifySpaceEvenFilled';

export default IconMaterialAlignJustifySpaceEvenFilled;
