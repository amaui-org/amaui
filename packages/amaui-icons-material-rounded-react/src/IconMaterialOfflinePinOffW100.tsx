import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOfflinePinOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflinePinOffW100'

      short_name='OfflinePinOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-306q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h266l28 28H360Zm120 174q-72.21 0-135.72-27.4-63.51-27.41-110.49-74.39-46.98-46.98-74.39-110.49Q132-407.79 132-480q0-62 21-119.5T215-705l-79-79q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5l-79-79q-48 41-105.5 62T480-132Zm205-103L235-685q-36 43-55.5 95.5T160-480q0 134 93 227t227 93q57 0 109.5-19.5T685-235ZM559-559ZM423-423Zm195-213q5 5 5 10t-5 10l-71 71q-4 4-9.5 4.5T527-545q-5-5-5-10t5-10l71-71q4-4 9.5-4.5T618-636ZM312-785q38-22 80.48-32.5Q434.96-828 480-828q71.76 0 134.88 27Q678-774 726-726q48 48 75 111.12 27 63.12 27 134.88 0 44-10.5 85.5T787-315q-2.69 5-8.85 6.5-6.15 1.5-10.94-1.5-4.79-3-6.5-9t1.29-11q19-35.11 28.5-72.55Q800-440 800-480q0-134-93-227t-227-93q-40 0-77.45 9.5Q365.11-781 330-762q-5 3-11 2t-10-6q-4-5-3-10.5t6-8.5Z"/>
    </Icon>
  );
});

IconMaterialOfflinePinOffW100.displayName = 'AmauiIconMaterialOfflinePinOffW100';

export default IconMaterialOfflinePinOffW100;
