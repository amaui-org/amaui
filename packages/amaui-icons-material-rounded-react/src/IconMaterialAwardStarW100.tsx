import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAwardStarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AwardStarW100'

      short_name='AwardStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M592.37-212 522-142q-17.315 17-42.157 17Q455-125 438-142l-70.37-70H272q-24.75 0-42.375-17.625T212-272v-95.63L142-438q-17-17.315-17-42.157Q125-505 142-522l70-70.37V-688q0-24.75 17.625-42.375T272-748h95.63L438-818q17.315-17 42.157-17Q505-835 522-818l70.37 70H688q24.75 0 42.375 17.625T748-688v95.63L818-522q17 17.315 17 42.157Q835-455 818-438l-70 70.37V-272q0 24.75-17.625 42.375T688-212h-95.63ZM480-480Zm0 340 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-263 63 39q8 5 16.5-1t6.5-16l-17-72 55.795-47.721Q613-508 609.5-517T596-527l-73-7-29-67q-3.871-9-13.935-9Q470-610 466-601l-29 67-73 7q-10 1-13.5 10t4.705 16.279L411-453l-17 72q-2 10 6.5 16t16.5 1l63-39Z"/>
    </Icon>
  );
});

IconMaterialAwardStarW100.displayName = 'AmauiIconMaterialAwardStarW100';

export default IconMaterialAwardStarW100;
