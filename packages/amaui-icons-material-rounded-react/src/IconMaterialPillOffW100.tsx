import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPillOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PillOffW100'

      short_name='PillOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m657 643-19-19 80-80q20-20 31-47t11-56q0-60-42.5-102.5T615 296q-29 0-56 11t-47 31l-80 80-19-19 79-80q25-24 56.538-37.5 31.539-13.5 66.154-13.5Q687 268 737.5 318.459q50.5 50.46 50.5 122.874Q788 476 774.5 507.5T737 564l-80 79ZM345 856q29 0 56-11t47-31l113-113-206-206-113 113q-20 20-31 47t-11 56q0 60 42.5 102.5T345 856Zm235-136L468 833q-24 24-55.961 37.5Q380.079 884 345 884q-72.276 0-122.638-50.459Q172 783.081 172 710.667 172 676 185.5 644t37.5-56l113-112-194-194q-4-4-4.5-9.5T142 262q5-5 10-5t10 5l636 636q4 4 4.5 9.5T798 918q-5 5-10 5t-10-5L580 720ZM458 598Zm77-77Z"/>
    </Icon>
  );
});

IconMaterialPillOffW100.displayName = 'AmauiIconMaterialPillOffW100';

export default IconMaterialPillOffW100;
