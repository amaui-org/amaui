import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatLetterSpacing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLetterSpacing'

      short_name='FormatLetterSpacing'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m313 856 36 36q11 11 11 27.5T348 948q-11 11-28 11t-28-11L188 844q-12-12-12-28t12-28l104-104q11-11 27.5-11t28.5 11q12 12 12 28.5T348 741l-35 35h334l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L668 948q-11 11-27.5 11T612 948q-12-12-12-28.5t12-28.5l35-35H313Zm-73-280q-17 0-28.5-11.5T200 536V216q0-17 11.5-28.5T240 176q17 0 28.5 11.5T280 216v320q0 17-11.5 28.5T240 576Zm240 0q-17 0-28.5-11.5T440 536V216q0-17 11.5-28.5T480 176q17 0 28.5 11.5T520 216v320q0 17-11.5 28.5T480 576Zm240 0q-17 0-28.5-11.5T680 536V216q0-17 11.5-28.5T720 176q17 0 28.5 11.5T760 216v320q0 17-11.5 28.5T720 576Z"/>
    </Icon>
  );
});

IconMaterialFormatLetterSpacing.displayName = 'AmauiIconMaterialFormatLetterSpacing';

export default IconMaterialFormatLetterSpacing;
