import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldWithHeartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHeartFilled'

      short_name='ShieldWithHeart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 9.5q-.3-.375-.775-.588Q10.75 8.7 10.2 8.7q-.9 0-1.55.65T8 10.9q0 .775.4 1.425t1.85 2.05l1.075 1q.275.275.675.275t.675-.275l1.05-.975q1.425-1.375 1.85-2.063Q16 11.65 16 10.9q0-.9-.65-1.55T13.8 8.7q-.525 0-1.012.212-.488.213-.788.588Zm0 12.425h-.25q-.125 0-.225-.05-3.275-1.025-5.4-4.063Q4 14.775 4 11.1V6.375q0-.625.363-1.125.362-.5.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725.362.5.362 1.125V11.1q0 3.675-2.125 6.712-2.125 3.038-5.4 4.063-.125.05-.475.05Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHeartFilled.displayName = 'AmauiIconMaterialShieldWithHeartFilled';

export default IconMaterialShieldWithHeartFilled;
