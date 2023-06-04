import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLetterSwitchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LetterSwitchW100'

      short_name='LetterSwitch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M629 924V766h28v120q51-63 77-142t26-169q0-90-26-168.5T657 266v120h-28V228h158v28H685q51 65 77 146.5T788 576q0 92-26 173.5T685 896h102v28H629ZM346 745h-71v50h71v-50Zm104 0h-74v50h74v-50Zm-13-138v25h68v28h-68v30h-28v-30h-96v30h-28v-30h-69v-28h69v-25h28v25h96v-25h28ZM228 918q-4-8-8-14.5t-9-12.5q45-7 76.5-24t48.5-44H212v-28h35v-78h98v-34h30v34h103v78h31v28H382q29 29 61.5 46.5T511 892q-5 6-8.5 12t-6.5 14q-40-5-75-25.5T360 837q-17 26-47 45t-85 36Zm22-406-27-14q23-39 39.5-76.5T290 333h-70v-28h76q5-17 7.5-34.5T307 235l32 12q-4 20-7 34.5t-6 27.5h37q23 0 39 15.5t16 53.5q0 17-3.5 42.5T403 467q-6 16-11 22.5T380 501q-6 4-13 6t-15 1l-37-2-6-25h35q12 0 21.5-5.5T380 456q5-12 7.5-35.5T390 383q0-29-11.5-37.5T351 337h-30q-11 44-28.5 87T250 512Zm214-232q16 27 30 55.5t25 59.5l-33 14q-8-30-21-59t-32-56l31-14Z"/>
    </Icon>
  );
});

IconMaterialLetterSwitchW100.displayName = 'AmauiIconMaterialLetterSwitchW100';

export default IconMaterialLetterSwitchW100;
