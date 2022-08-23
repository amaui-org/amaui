import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelImportantSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelImportantSharp'
      short_name='LabelImportant'

      {...props}
    >
      <path d="M3 19 7.5 12 3 5H16.05L21 12L16.05 19ZM6.65 17H15L18.55 12L15 7H6.65L9.9 12ZM9.9 12 6.65 7 9.9 12 6.65 17Z"/>
    </Icon>
  );
});

IconMaterialLabelImportantSharp.displayName = 'AmauiIconMaterialLabelImportantSharp';

export default IconMaterialLabelImportantSharp;
