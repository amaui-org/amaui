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
      <path d="M5 17.7 8.65 12 5 6.3h9.975L19 12l-4.1 5.7Zm1.25-.7h8.325l3.575-5-3.575-5H6.25l3.25 5Zm3.25-5L6.25 7l3.25 5-3.25 5Z"/>
    </Icon>
  );
});

IconMaterialLabelImportantW100.displayName = 'AmauiIconMaterialLabelImportantW100';

export default IconMaterialLabelImportantW100;
