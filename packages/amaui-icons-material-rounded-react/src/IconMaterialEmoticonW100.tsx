import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmoticonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmoticonW100'

      short_name='Emoticon'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M286 750q-14 0-24-10t-10-24.275Q252 702 262 692q10-10 24.275-10Q300 682 310 691.917q10 9.916 10 24.083 0 14-9.917 24-9.916 10-24.083 10Zm0-280q-14 0-24-10t-10-24.275Q252 422 262 412q10-10 24.275-10Q300 402 310 411.917q10 9.916 10 24.083 0 14-9.917 24-9.916 10-24.083 10Zm154 120q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h80q5.95 0 9.975 4.035 4.025 4.035 4.025 10T529.975 586q-4.025 4-9.975 4h-80Zm239-13.716Q679 515 661 460q-18-55-50-102-4-5-4-11.5t5-11q5-4.5 10-3t9 6.5q35 51 55.5 110.923Q707 509.845 707 576q0 54.937-13.5 104.968Q680 731 655 776q-2.8 5.217-8.4 6.609Q641 784 636 780.5t-5.5-9.5q-.5-6 2.5-12 21.789-41.991 33.895-87.386Q679 626.219 679 576.284Z"/>
    </Icon>
  );
});

IconMaterialEmoticonW100.displayName = 'AmauiIconMaterialEmoticonW100';

export default IconMaterialEmoticonW100;
