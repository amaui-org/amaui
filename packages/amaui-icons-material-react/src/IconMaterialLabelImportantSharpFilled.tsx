import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelImportantSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelImportantSharpFilled'
      short_name='LabelImportant'

      {...props}
    >
      <path d="M3 19 7.5 12 3 5H16.05L21 12L16.05 19Z"/>
    </Icon>
  );
});

IconMaterialLabelImportantSharpFilled.displayName = 'AmauiIconMaterialLabelImportantSharpFilled';

export default IconMaterialLabelImportantSharpFilled;
