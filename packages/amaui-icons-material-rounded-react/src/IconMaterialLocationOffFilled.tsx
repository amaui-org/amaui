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
      <path d="M18.2 15.325 13.775 10.9q.125-.2.175-.425Q14 10.25 14 10q0-.825-.587-1.413Q12.825 8 12 8q-.25 0-.475.05-.225.05-.425.175L6.775 3.9q1.075-.925 2.413-1.413Q10.525 2 12 2q3.175 0 5.587 2.225Q20 6.45 20 10.2q0 1.2-.45 2.462-.45 1.263-1.35 2.663Zm-6.95 6.025Q7.6 18.125 5.8 15.375 4 12.625 4 10.2q0-.8.125-1.525.125-.725.35-1.375l-3.1-3.1Q1.1 3.925 1.1 3.5q0-.425.275-.725.3-.275.725-.275t.725.275l18.375 18.4q.275.275.275.7 0 .425-.275.7-.3.3-.725.3t-.7-.3l-4.1-4.075q-.65.7-1.375 1.413-.725.712-1.55 1.437-.15.125-.35.2-.2.075-.4.075t-.4-.075q-.2-.075-.35-.2Z"/>
    </Icon>
  );
});

IconMaterialLocationOffFilled.displayName = 'AmauiIconMaterialLocationOffFilled';

export default IconMaterialLocationOffFilled;
