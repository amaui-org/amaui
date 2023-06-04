import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelImportantFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelImportantFilled'

      short_name='LabelImportant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3 19 4.5-7L3 5h13.05L21 12l-4.95 7Z"/>
    </Icon>
  );
});

IconMaterialLabelImportantFilled.displayName = 'AmauiIconMaterialLabelImportantFilled';

export default IconMaterialLabelImportantFilled;
