import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOffFilled'

      short_name='LocationOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.475 23.3-4.8-4.8q-.775.85-1.687 1.725Q13.075 21.1 12 22q-4.025-3.425-6.012-6.35Q4 12.725 4 10.2q0-.8.125-1.525.125-.725.35-1.375l-3.8-3.8L2.1 2.075l19.8 19.8ZM18.2 15.325 13.775 10.9q.125-.2.175-.425Q14 10.25 14 10q0-.825-.587-1.413Q12.825 8 12 8q-.25 0-.475.05-.225.05-.425.175L6.775 3.9q1.075-.925 2.413-1.413Q10.525 2 12 2q3.175 0 5.587 2.225Q20 6.45 20 10.2q0 1.2-.45 2.462-.45 1.263-1.35 2.663Z"/>
    </Icon>
  );
});

IconMaterialLocationOffFilled.displayName = 'AmauiIconMaterialLocationOffFilled';

export default IconMaterialLocationOffFilled;
