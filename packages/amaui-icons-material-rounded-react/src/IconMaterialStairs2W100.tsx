import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStairs2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stairs2W100'

      short_name='Stairs2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-252q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h209v-184q0-12.75 8.63-21.38Q372.25-494 385-494h192v-184q0-12.75 8.63-21.38Q594.25-708 607-708h207q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H605v184q0 12.75-8.62 21.37Q587.75-466 575-466H383v184q0 12.75-8.62 21.37Q365.75-252 353-252H146Z"/>
    </Icon>
  );
});

IconMaterialStairs2W100.displayName = 'AmauiIconMaterialStairs2W100';

export default IconMaterialStairs2W100;
