import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelImportant = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelImportant'

      short_name='LabelImportant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3 19 4.5-7L3 5h13.05L21 12l-4.95 7Zm3.65-2H15l3.55-5L15 7H6.65l3.25 5Zm3.25-5L6.65 7l3.25 5-3.25 5Z"/>
    </Icon>
  );
});

IconMaterialLabelImportant.displayName = 'AmauiIconMaterialLabelImportant';

export default IconMaterialLabelImportant;
