import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifyFlexStartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyFlexStartFilled'

      short_name='AlignJustifyFlexStart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 976V176h80v800H80Zm440-200V376h120v400H520Zm-240 0V376h120v400H280Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyFlexStartFilled.displayName = 'AmauiIconMaterialAlignJustifyFlexStartFilled';

export default IconMaterialAlignJustifyFlexStartFilled;
