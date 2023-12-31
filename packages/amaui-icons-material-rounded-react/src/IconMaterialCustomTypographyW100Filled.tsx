import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCustomTypographyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CustomTypographyW100Filled'

      short_name='CustomTypography'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-212v66q0 5.95-4.035 9.975-4.035 4.025-10 4.025T470-136.025q-4-4.025-4-9.975v-160q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v66h280q5.95 0 9.975 4.035 4.025 4.035 4.025 10T783.975-216q-4.025 4-9.975 4H494Zm-308 0q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h166q5.95 0 9.975 4.035 4.025 4.035 4.025 10T361.975-216q-4.025 4-9.975 4H186Zm196-288h196l39 111q2 5 5 7t7.875 2q8.125 0 11.625-6t1.5-13L492-822q-1.184-2.769-3.553-4.385Q486.079-828 483-828h-6.279q-2.721 0-5.121 1.615-2.4 1.616-3.6 4.385L317-399q-2 7 1.5 13t11.379 6q5.121 0 8.121-2t5-7l39-111Zm10-28 86-242h4l86 242H392Z"/>
    </Icon>
  );
});

IconMaterialCustomTypographyW100Filled.displayName = 'AmauiIconMaterialCustomTypographyW100Filled';

export default IconMaterialCustomTypographyW100Filled;
