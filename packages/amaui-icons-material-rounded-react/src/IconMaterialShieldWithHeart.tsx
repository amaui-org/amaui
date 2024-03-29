import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldWithHeart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHeart'

      short_name='ShieldWithHeart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 9.5q-.3-.375-.775-.588Q10.75 8.7 10.2 8.7q-.9 0-1.55.65T8 10.9q0 .775.387 1.45.388.675 1.863 2.025l1.075 1q.275.275.675.275t.675-.275l1.05-.975q1.45-1.35 1.863-2.05.412-.7.412-1.45 0-.9-.65-1.55T13.8 8.7q-.525 0-1.012.212-.488.213-.788.588Zm0 12.425h-.25q-.125 0-.225-.05-3.275-1.025-5.4-4.063Q4 14.775 4 11.1V6.375q0-.625.363-1.125.362-.5.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725.362.5.362 1.125V11.1q0 3.675-2.125 6.712-2.125 3.038-5.4 4.063-.125.05-.475.05Zm0-2.025q2.6-.825 4.3-3.3 1.7-2.475 1.7-5.5V6.375l-6-2.25-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3Zm0-7.9Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHeart.displayName = 'AmauiIconMaterialShieldWithHeart';

export default IconMaterialShieldWithHeart;
