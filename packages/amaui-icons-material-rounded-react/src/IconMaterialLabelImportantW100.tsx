import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelImportantW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelImportantW100'

      short_name='LabelImportant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.475 15.4 8.65 12 6.475 8.6Q6 7.85 6.438 7.075 6.875 6.3 7.75 6.3h6.05q.55 0 1.038.25.487.25.812.7l2.725 3.875q.275.4.275.875t-.275.875L15.55 16.8q-.3.425-.762.662-.463.238-.988.238H7.75q-.875 0-1.312-.775Q6 16.15 6.475 15.4ZM6.25 17h7.55q.375 0 .7-.175.325-.175.55-.475l3.1-4.35-3.1-4.35q-.225-.3-.525-.475Q14.225 7 13.8 7H6.25l3.25 5Zm3.25-5L6.25 7l3.25 5-3.25 5Z"/>
    </Icon>
  );
});

IconMaterialLabelImportantW100.displayName = 'AmauiIconMaterialLabelImportantW100';

export default IconMaterialLabelImportantW100;
