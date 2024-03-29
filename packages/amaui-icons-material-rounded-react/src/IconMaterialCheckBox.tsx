import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckBox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBox'

      short_name='CheckBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Zm5.6-3.225q.2 0 .375-.062.175-.063.325-.213l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275-.425 0-.7.275L10.6 13.4l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7 0 .425.275.7L9.9 15.5q.15.15.325.213.175.062.375.062ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialCheckBox.displayName = 'AmauiIconMaterialCheckBox';

export default IconMaterialCheckBox;
