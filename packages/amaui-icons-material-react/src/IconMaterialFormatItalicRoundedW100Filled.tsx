import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatItalicRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatItalicRoundedW100Filled'
      short_name='FormatItalic'

      {...props}
    >
      <path d="M6 18.85Q5.85 18.85 5.75 18.75Q5.65 18.65 5.65 18.5Q5.65 18.35 5.75 18.25Q5.85 18.15 6 18.15H9.175L14.075 5.85H10.9Q10.75 5.85 10.65 5.75Q10.55 5.65 10.55 5.5Q10.55 5.35 10.65 5.25Q10.75 5.15 10.9 5.15H18Q18.15 5.15 18.25 5.25Q18.35 5.35 18.35 5.5Q18.35 5.65 18.25 5.75Q18.15 5.85 18 5.85H14.825L9.925 18.15H13.1Q13.25 18.15 13.35 18.25Q13.45 18.35 13.45 18.5Q13.45 18.65 13.35 18.75Q13.25 18.85 13.1 18.85Z"/>
    </Icon>
  );
});

IconMaterialFormatItalicRoundedW100Filled.displayName = 'AmauiIconMaterialFormatItalicRoundedW100Filled';

export default IconMaterialFormatItalicRoundedW100Filled;
