import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelImportantRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelImportantRoundedW100Filled'
      short_name='LabelImportant'

      {...props}
    >
      <path d="M6.475 15.4 8.65 12 6.475 8.6Q6 7.85 6.425 7.075Q6.85 6.3 7.75 6.3H13.8Q14.35 6.3 14.838 6.55Q15.325 6.8 15.65 7.25L18.375 11.125Q18.65 11.525 18.65 12Q18.65 12.475 18.375 12.875L15.55 16.8Q15.25 17.225 14.788 17.462Q14.325 17.7 13.8 17.7H7.75Q6.85 17.7 6.425 16.925Q6 16.15 6.475 15.4Z"/>
    </Icon>
  );
});

IconMaterialLabelImportantRoundedW100Filled.displayName = 'AmauiIconMaterialLabelImportantRoundedW100Filled';

export default IconMaterialLabelImportantRoundedW100Filled;
