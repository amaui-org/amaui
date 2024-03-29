import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStreetviewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StreetviewFilled'

      short_name='Streetview'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 11q-2.075 0-3.537-1.463Q13 8.075 13 6t1.463-3.538Q15.925 1 18 1t3.538 1.462Q23 3.925 23 6q0 2.075-1.462 3.537Q20.075 11 18 11ZM3.6 20.4q-.275-.275-.437-.625Q3 19.425 3 19V5q0-.825.587-1.413Q4.175 3 5 3h6.7q-.35.675-.525 1.437Q11 5.2 11 6q0 1.475.55 2.737.55 1.263 1.5 2.213Zm8.4.6v-5.4q0-1.05.637-1.888.638-.837 1.663-1.062.875-.2 1.8-.3.925-.1 1.9-.1.8 0 1.538.062.737.063 1.462.188V19q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialStreetviewFilled.displayName = 'AmauiIconMaterialStreetviewFilled';

export default IconMaterialStreetviewFilled;
