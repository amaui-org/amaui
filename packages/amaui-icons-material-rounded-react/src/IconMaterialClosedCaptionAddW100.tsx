import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClosedCaptionAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionAddW100'

      short_name='ClosedCaptionAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480ZM232-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h496q26 0 43 17t17 43v280q0 6-4 10t-10 4q-6 0-10-4t-4-10v-280q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v416q0 12 10 22t22 10h360q6 0 10 4t4 10q0 6-4 10t-10 4H232Zm528 0h-66q-6 0-10-4t-4-10q0-6 4-10t10-4h66v-66q0-6 4-10t10-4q6 0 10 4t4 10v66h66q6 0 10 4t4 10q0 6-4 10t-10 4h-66v66q0 6-4 10t-10 4q-6 0-10-4t-4-10v-66ZM560-376h80q18 0 31-13t13-31q0-6-5.5-8t-12.5-2q-5 0-7.5 2.5T656-420q0 7-4.5 11.5T640-404h-80q-6 0-11-5t-5-11v-120q0-6 5-11t11-5h80q7 0 11.5 4.5T656-540v2q0 6 4 10t10 4q6 0 10-4t4-10v-2q0-18-13-31t-31-13h-80q-18 0-31 13t-13 31v120q0 18 13 31t31 13Zm-240 0h80q18 0 31-13t13-31q0-6-5.5-8t-12.5-2q-5 0-7.5 2.5T416-420q0 7-4.5 11.5T400-404h-80q-6 0-11-5t-5-11v-120q0-6 5-11t11-5h80q7 0 11.5 4.5T416-540v2q0 6 4 10t10 4q6 0 10-4t4-10v-2q0-18-13-31t-31-13h-80q-18 0-31 13t-13 31v120q0 18 13 31t31 13Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionAddW100.displayName = 'AmauiIconMaterialClosedCaptionAddW100';

export default IconMaterialClosedCaptionAddW100;
