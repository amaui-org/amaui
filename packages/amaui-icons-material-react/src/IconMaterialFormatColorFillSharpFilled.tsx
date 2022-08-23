import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatColorFillSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorFillSharpFilled'
      short_name='FormatColorFill'

      {...props}
    >
      <path d="M10 17.6 2.4 10 8.575 3.8 6.175 1.4 7.6 0 17.6 10ZM10 5.225 5.225 10Q5.225 10 5.225 10Q5.225 10 5.225 10H14.775Q14.775 10 14.775 10Q14.775 10 14.775 10ZM19 17Q18.175 17 17.587 16.413Q17 15.825 17 15Q17 14.475 17.312 13.875Q17.625 13.275 18 12.75Q18.225 12.45 18.475 12.125Q18.725 11.8 19 11.5Q19.275 11.8 19.525 12.125Q19.775 12.45 20 12.75Q20.375 13.275 20.688 13.875Q21 14.475 21 15Q21 15.825 20.413 16.413Q19.825 17 19 17ZM2 24V20H22V24Z"/>
    </Icon>
  );
});

IconMaterialFormatColorFillSharpFilled.displayName = 'AmauiIconMaterialFormatColorFillSharpFilled';

export default IconMaterialFormatColorFillSharpFilled;
