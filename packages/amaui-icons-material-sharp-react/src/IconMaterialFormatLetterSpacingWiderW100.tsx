import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatLetterSpacingWiderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLetterSpacingWiderW100'

      short_name='FormatLetterSpacingWider'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h28v536h-28Zm668 0v-536h28v536h-28Zm-484-68 146-396h33l149 396h-35l-42-117H390l-41 117h-33Zm85-145h156l-77-216h-2l-77 216Z"/>
    </Icon>
  );
});

IconMaterialFormatLetterSpacingWiderW100.displayName = 'AmauiIconMaterialFormatLetterSpacingWiderW100';

export default IconMaterialFormatLetterSpacingWiderW100;
