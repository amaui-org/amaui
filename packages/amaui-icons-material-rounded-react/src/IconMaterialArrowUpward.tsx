import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowUpward = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUpward'

      short_name='ArrowUpward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q-.425 0-.712-.288Q11 19.425 11 19V7.825L6.125 12.7q-.3.3-.713.3Q5 13 4.7 12.7t-.3-.7q0-.4.3-.7l6.6-6.6q.15-.15.325-.213.175-.062.375-.062t.388.062q.187.063.312.213l6.6 6.6q.3.3.3.7 0 .4-.3.7-.3.3-.713.3-.412 0-.712-.3L13 7.825V19q0 .425-.287.712Q12.425 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialArrowUpward.displayName = 'AmauiIconMaterialArrowUpward';

export default IconMaterialArrowUpward;
