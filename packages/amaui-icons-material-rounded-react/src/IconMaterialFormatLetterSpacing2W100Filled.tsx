import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatLetterSpacing2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLetterSpacing2W100Filled'

      short_name='FormatLetterSpacing2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-142q-4 5-10 4.5t-10-4.5l-93-93q-9-9-9-21t9-21l93-92q4-4 10-4.5t10 4.5q4 4 4 10t-4 10l-79 79h586l-78-79q-4-4-4.5-9.5T695-369q5-5 10-5t10 5l92 92q9 9 9 21t-9 21l-93 93q-4 4-10 4.5t-10-4.5q-4-4-4-10t4-10l80-80H186l80 81q4 4 4 9.5t-4 9.5Zm55-301 144-377q2-4 5-6t7-2h10q4 0 7 2.5t5 6.5l140 376q2 7-1.5 13t-11.5 6q-5 0-8-2t-5-7l-39-105H386l-39 105q-2 4-5 6.5t-8 2.5q-8 0-11.5-6t-1.5-13Zm75-121h168l-80-220h-4l-84 220Z"/>
    </Icon>
  );
});

IconMaterialFormatLetterSpacing2W100Filled.displayName = 'AmauiIconMaterialFormatLetterSpacing2W100Filled';

export default IconMaterialFormatLetterSpacing2W100Filled;
