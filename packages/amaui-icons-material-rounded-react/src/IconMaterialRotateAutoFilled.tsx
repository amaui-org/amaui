import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRotateAutoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateAutoFilled'

      short_name='RotateAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80q-77 0-146-27.5t-122-76Q159-232 124.5-298T82-440q-2-18 9.5-28t26.5-11q15-1 29 8t16 31q15 121 105.5 201T480-159q134 0 227-93t93-227q0-134-93-227t-227-93q-89 0-161.5 43.5T204-640h76q17 0 28.5 11.5T320-600q0 17-11.5 28.5T280-560H120q-17 0-28.5-11.5T80-600v-160q0-17 11.5-28.5T120-800q17 0 28.5 11.5T160-760v40q55-73 138-116.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480ZM312-320h64l16-46q8-21 31.5-33.5T505-412q22 0 39.5 12.5T570-366l9 27q3 8 10.5 13.5T606-320q15 0 23.5-12.5T633-359L519-661q-3-9-13.5-14t-36.5-5q-9 0-17 5t-11 14L312-320Zm114-144 52-150h4l52 150H426Z"/>
    </Icon>
  );
});

IconMaterialRotateAutoFilled.displayName = 'AmauiIconMaterialRotateAutoFilled';

export default IconMaterialRotateAutoFilled;
