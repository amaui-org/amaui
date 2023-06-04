import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPillW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PillW100'

      short_name='Pill'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M345 884q-72 0-122.5-50.5T172 711q0-35 13.5-67t37.5-56l269-269q24-24 56-37.5t67-13.5q72 0 122.5 50.5T788 441q0 35-13.5 67T737 564L468 833q-24 24-56 37.5T345 884Zm248-216 125-124q20-20 31-47t11-56q0-60-42.5-102.5T615 296q-29 0-56 11t-47 31L388 463l205 205ZM345 856q29 0 56-11t47-31l124-125-205-205-125 124q-20 20-31 47t-11 56q0 60 42.5 102.5T345 856Z"/>
    </Icon>
  );
});

IconMaterialPillW100.displayName = 'AmauiIconMaterialPillW100';

export default IconMaterialPillW100;
