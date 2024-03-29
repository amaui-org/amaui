import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransgenderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransgenderFilled'

      short_name='Transgender'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q1.45 0 2.475-1.025Q15.5 12.95 15.5 11.5q0-1.45-1.025-2.475Q13.45 8 12 8q-1.45 0-2.475 1.025Q8.5 10.05 8.5 11.5q0 1.45 1.025 2.475Q10.55 15 12 15Zm-1 8v-2H9v-2h2v-2.1q-1.925-.35-3.212-1.863Q6.5 13.525 6.5 11.5q0-.875.25-1.663.25-.787.7-1.437l-.65-.65-1.4 1.4L4 7.75l1.4-1.425-1.9-1.9V7h-2V1h6v2H4.925l1.9 1.9L8.25 3.5l1.4 1.4-1.4 1.425.65.65q.65-.475 1.438-.725Q11.125 6 12 6q.875 0 1.663.25.787.25 1.437.725L19.075 3H16.5V1h6v6h-2V4.425l-3.975 3.95q.475.675.725 1.462.25.788.25 1.663 0 2.025-1.288 3.537Q14.925 16.55 13 16.9V19h2v2h-2v2Z"/>
    </Icon>
  );
});

IconMaterialTransgenderFilled.displayName = 'AmauiIconMaterialTransgenderFilled';

export default IconMaterialTransgenderFilled;
