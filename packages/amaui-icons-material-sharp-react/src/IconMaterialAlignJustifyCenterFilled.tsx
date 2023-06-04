import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifyCenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyCenterFilled'

      short_name='AlignJustifyCenter'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 976V176h80v800h-80Zm160-200V376h120v400H600Zm-360 0V376h120v400H240Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyCenterFilled.displayName = 'AmauiIconMaterialAlignJustifyCenterFilled';

export default IconMaterialAlignJustifyCenterFilled;
