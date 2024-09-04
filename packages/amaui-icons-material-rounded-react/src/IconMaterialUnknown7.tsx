import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnknown7 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Unknown7'

      short_name='Unknown7'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200q-17 0-28.5-11.5T440-240q0-17 11.5-28.5T480-280h320q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200H480Zm160-160q-17 0-28.5-11.5T600-400v-208l-36 36q-11 11-28 11t-28-11q-11-11-11-28t11-28l104-104q12-12 28-12t28 12l104 104q11 11 11 28t-11 28q-11 11-28 11t-28-11l-36-36v208q0 17-11.5 28.5T640-360Zm-477 0q-16 0-24.5-13t-3.5-28l114-300q3-9 11-14t17-5h22q9 0 17 5t11 14l114 303q5 14-3 26t-23 12q-9 0-17-5.5T387-380l-25-72H216l-25 73q-3 9-11 14t-17 5Zm71-144h108l-52-150h-4l-52 150Z"/>
    </Icon>
  );
});

IconMaterialUnknown7.displayName = 'AmauiIconMaterialUnknown7';

export default IconMaterialUnknown7;
