import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelImportantW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelImportantW100Filled'

      short_name='LabelImportant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.475 15.4 8.65 12 6.475 8.6Q6 7.85 6.425 7.075 6.85 6.3 7.75 6.3h6.05q.55 0 1.038.25.487.25.812.7l2.725 3.875q.275.4.275.875t-.275.875L15.55 16.8q-.3.425-.762.662-.463.238-.988.238H7.75q-.9 0-1.325-.775-.425-.775.05-1.525Z"/>
    </Icon>
  );
});

IconMaterialLabelImportantW100Filled.displayName = 'AmauiIconMaterialLabelImportantW100Filled';

export default IconMaterialLabelImportantW100Filled;
