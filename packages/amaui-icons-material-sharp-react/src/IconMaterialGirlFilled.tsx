import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGirlFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GirlFilled'

      short_name='Girl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 7.5q-.725 0-1.238-.513-.512-.512-.512-1.237 0-.725.512-1.238Q11.275 4 12 4t1.238.512q.512.513.512 1.238t-.512 1.237Q12.725 7.5 12 7.5ZM10 20v-4H8l2.375-6.375q.2-.5.638-.813Q11.45 8.5 12 8.5t.988.312q.437.313.637.813L16 16h-2v4Z"/>
    </Icon>
  );
});

IconMaterialGirlFilled.displayName = 'AmauiIconMaterialGirlFilled';

export default IconMaterialGirlFilled;
