import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonApronW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonApronW100'

      short_name='PersonApron'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-512q-44.55 0-76.275-31.725Q372-575.45 372-620q0-44.55 31.725-76.275Q435.45-728 480-728q44.55 0 76.275 31.725Q588-664.55 588-620q0 44.55-31.725 76.275Q524.55-512 480-512ZM242-232q-12.75 0-21.375-8.625T212-262v-22q0-22.791 14-41.896Q240-345 262-356q52-24 106.69-38t111.5-14q56.81 0 111.31 14T698-356q22 11 36 30.104 14 19.105 14 41.896v22q0 12.75-8.625 21.375T718-232H242Zm238-308q33 0 56.5-23.5T560-620q0-33-23.5-56.5T480-700q-33 0-56.5 23.5T400-620q0 33 23.5 56.5T480-540Zm130 179v101h110v-24q0-16-11-28t-25-20q-18-9-36.5-16T610-361Zm-232-7v48h204v-48q-25-6-50.75-9t-51.5-3q-25.75 0-51.25 3t-50.5 9ZM240-260h110v-101q-19 6-37.5 13T276-332q-14 8-25 20t-11 28v24Zm370 0H350h260ZM480-620Z"/>
    </Icon>
  );
});

IconMaterialPersonApronW100.displayName = 'AmauiIconMaterialPersonApronW100';

export default IconMaterialPersonApronW100;
