import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatLetterSpacingWideFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLetterSpacingWideFilled'

      short_name='FormatLetterSpacingWide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-640h80v640h-80Zm640 0v-640h80v640h-80ZM294-280l150-400h72l150 400h-70l-34-102H400l-36 102h-70Zm126-160h120l-58-166-62 166Z"/>
    </Icon>
  );
});

IconMaterialFormatLetterSpacingWideFilled.displayName = 'AmauiIconMaterialFormatLetterSpacingWideFilled';

export default IconMaterialFormatLetterSpacingWideFilled;
