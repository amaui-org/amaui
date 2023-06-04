import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifyFlexEndFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyFlexEndFilled'

      short_name='AlignJustifyFlexEnd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M800 976V176h80v800h-80ZM560 776V376h120v400H560Zm-240 0V376h120v400H320Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyFlexEndFilled.displayName = 'AmauiIconMaterialAlignJustifyFlexEndFilled';

export default IconMaterialAlignJustifyFlexEndFilled;
