import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifyFlexEnd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyFlexEnd'

      short_name='AlignJustifyFlexEnd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M800 976V176h80v800h-80ZM560 776V376h120v400H560Zm-240 0V376h120v400H320Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyFlexEnd.displayName = 'AmauiIconMaterialAlignJustifyFlexEnd';

export default IconMaterialAlignJustifyFlexEnd;
