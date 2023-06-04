import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifyStretch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyStretch'

      short_name='AlignJustifyStretch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M800 976V176h80v800h-80Zm-720 0V176h80v800H80Zm440-480V376h200v120H520Zm-280 0V376h200v120H240Zm280 280V656h200v120H520Zm-280 0V656h200v120H240Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyStretch.displayName = 'AmauiIconMaterialAlignJustifyStretch';

export default IconMaterialAlignJustifyStretch;
