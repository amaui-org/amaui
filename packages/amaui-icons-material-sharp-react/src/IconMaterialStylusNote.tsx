import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStylusNote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusNote'

      short_name='StylusNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m499-287 335-335-52-52-335 335 52 52Zm-261 87q-100-5-149-42T40-349q0-65 53.5-105.5T242-503q39-3 58.5-12.5T320-542q0-26-29.5-39T193-600l7-80q103 8 151.5 41.5T400-542q0 53-38.5 83T248-423q-64 5-96 23.5T120-349q0 35 28 50.5t94 18.5l-4 80Zm280 7L353-358l429-429 166 165-430 429Zm0 0-208 43 43-208 165 165Z"/>
    </Icon>
  );
});

IconMaterialStylusNote.displayName = 'AmauiIconMaterialStylusNote';

export default IconMaterialStylusNote;
