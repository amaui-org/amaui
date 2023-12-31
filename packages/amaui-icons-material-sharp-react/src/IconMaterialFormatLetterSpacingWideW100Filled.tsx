import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatLetterSpacingWideW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLetterSpacingWideW100Filled'

      short_name='FormatLetterSpacingWide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-212v-536h28v536h-28Zm588 0v-536h28v536h-28Zm-444-68 146-396h33l149 396h-35l-42-117H390l-41 117h-33Zm85-145h156l-77-216h-2l-77 216Z"/>
    </Icon>
  );
});

IconMaterialFormatLetterSpacingWideW100Filled.displayName = 'AmauiIconMaterialFormatLetterSpacingWideW100Filled';

export default IconMaterialFormatLetterSpacingWideW100Filled;
