import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullHdW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullHdW100'

      short_name='FullHd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M424-456h92v66q0 6.067 3.953 10.033 3.954 3.967 10 3.967Q536-376 540-379.967q4-3.966 4-10.033v-180q0-6.067-3.953-10.033-3.954-3.967-10-3.967Q524-584 520-580.033q-4 3.966-4 10.033v86h-92v-86q0-6.067-3.953-10.033-3.954-3.967-10-3.967Q404-584 400-580.033q-4 3.966-4 10.033v180q0 6.067 3.953 10.033 3.954 3.967 10 3.967Q416-376 420-379.967q4-3.966 4-10.033v-66Zm194 80h89q18.75 0 31.875-13.125T752-421v-118q0-18.75-13.125-31.875T707-584h-89q-6.067 0-10.033 3.967Q604-576.067 604-570v180q0 6.067 3.967 10.033Q611.933-376 618-376Zm14-28v-152h76q6 0 11 5t5 11v120q0 6-5 11t-11 5h-76Zm-396-56h66q6.067 0 10.033-3.953 3.967-3.954 3.967-10Q316-480 312.033-484q-3.966-4-10.033-4h-66v-68h86q6.067 0 10.033-3.953 3.967-3.954 3.967-10Q336-576 332.033-580q-3.966-4-10.033-4H222q-6.067 0-10.033 3.967Q208-576.067 208-570v180q0 6.067 3.953 10.033 3.954 3.967 10 3.967Q228-376 232-379.967q4-3.966 4-10.033v-70Zm-84 248q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h656q26 0 43 17t17 43v416q0 26-17 43t-43 17H152Zm0-28h656q14 0 23-9t9-23v-416q0-14-9-23t-23-9H152q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFullHdW100.displayName = 'AmauiIconMaterialFullHdW100';

export default IconMaterialFullHdW100;
