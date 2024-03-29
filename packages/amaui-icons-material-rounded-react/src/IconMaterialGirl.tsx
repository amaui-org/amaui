import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGirl = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Girl'

      short_name='Girl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 7.5q-.725 0-1.238-.513-.512-.512-.512-1.237 0-.725.512-1.238Q11.275 4 12 4t1.238.512q.512.513.512 1.238t-.512 1.237Q12.725 7.5 12 7.5ZM11 20q-.425 0-.712-.288Q10 19.425 10 19v-3h-.55q-.525 0-.837-.425-.313-.425-.113-.925l1.875-5.025q.2-.5.638-.813Q11.45 8.5 12 8.5t.988.312q.437.313.637.813L15.5 14.65q.2.5-.112.925-.313.425-.838.425H14v3q0 .425-.287.712Q13.425 20 13 20Z"/>
    </Icon>
  );
});

IconMaterialGirl.displayName = 'AmauiIconMaterialGirl';

export default IconMaterialGirl;
