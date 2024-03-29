import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroupAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupAddFilled'

      short_name='GroupAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 20v-2.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q6.35 13 8 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q16 16.35 16 17.2V20Zm8-8q-1.65 0-2.825-1.175Q4 9.65 4 8q0-1.65 1.175-2.825Q6.35 4 8 4q1.65 0 2.825 1.175Q12 6.35 12 8q0 1.65-1.175 2.825Q9.65 12 8 12Zm4.5-.05q.725-.8 1.113-1.825Q14 9.1 14 8t-.387-2.125Q13.225 4.85 12.5 4.05q1.5.2 2.5 1.325T16 8q0 1.5-1 2.625t-2.5 1.325ZM18 20v-3q0-.9-.4-1.712-.4-.813-1.05-1.438 1.275.45 2.363 1.162Q20 15.725 20 17v3Zm2-7v-2h-2V9h2V7h2v2h2v2h-2v2Z"/>
    </Icon>
  );
});

IconMaterialGroupAddFilled.displayName = 'AmauiIconMaterialGroupAddFilled';

export default IconMaterialGroupAddFilled;
