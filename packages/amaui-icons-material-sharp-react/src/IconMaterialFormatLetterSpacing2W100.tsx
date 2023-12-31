import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatLetterSpacing2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLetterSpacing2W100'

      short_name='FormatLetterSpacing2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M256-132 132-256l124-123 19 20-88 89h586l-88-89 20-20 123 123-124 124-19-20 89-90H186l89 90-19 20Zm58-292 154-404h28l150 404h-30l-42-114H386l-42 114h-30Zm82-140h168l-80-220h-4l-84 220Z"/>
    </Icon>
  );
});

IconMaterialFormatLetterSpacing2W100.displayName = 'AmauiIconMaterialFormatLetterSpacing2W100';

export default IconMaterialFormatLetterSpacing2W100;
