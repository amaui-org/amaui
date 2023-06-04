import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifyCenter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyCenter'

      short_name='AlignJustifyCenter'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 976V176h80v800h-80Zm160-200V376h120v400H600Zm-360 0V376h120v400H240Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyCenter.displayName = 'AmauiIconMaterialAlignJustifyCenter';

export default IconMaterialAlignJustifyCenter;
