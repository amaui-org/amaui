import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatLetterSpacingStandardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLetterSpacingStandardW100'

      short_name='FormatLetterSpacingStandard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-536h28v536h-28Zm508 0v-536h28v536h-28Zm-404-68 146-396h33l149 396h-35l-42-117H390l-41 117h-33Zm85-145h156l-77-216h-2l-77 216Z"/>
    </Icon>
  );
});

IconMaterialFormatLetterSpacingStandardW100.displayName = 'AmauiIconMaterialFormatLetterSpacingStandardW100';

export default IconMaterialFormatLetterSpacingStandardW100;
