import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStylusNoteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusNoteFilled'

      short_name='StylusNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M238-200q-100-5-149-42T40-349q0-65 53.5-105.5T242-503q39-3 58.5-12.5T320-542q0-26-29.5-39T193-600l7-80q103 8 151.5 41.5T400-542q0 53-38.5 83T248-423q-64 5-96 23.5T120-349q0 35 28 50.5t94 18.5l-4 80Zm317-30L390-395l392-392 166 165-393 392Zm-46 38-198 42 40-200 158 158Z"/>
    </Icon>
  );
});

IconMaterialStylusNoteFilled.displayName = 'AmauiIconMaterialStylusNoteFilled';

export default IconMaterialStylusNoteFilled;
