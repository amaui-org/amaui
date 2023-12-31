import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatLetterSpacingWider = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLetterSpacingWider'

      short_name='FormatLetterSpacingWider'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h80v640H80Zm720 0v-640h80v640h-80ZM294-280l150-400h72l150 400h-69l-36-102H399l-36 102h-69Zm126-160h120l-58-166h-4l-58 166Z"/>
    </Icon>
  );
});

IconMaterialFormatLetterSpacingWider.displayName = 'AmauiIconMaterialFormatLetterSpacingWider';

export default IconMaterialFormatLetterSpacingWider;
