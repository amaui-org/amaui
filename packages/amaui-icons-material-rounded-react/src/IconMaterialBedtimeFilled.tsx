import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedtimeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedtimeFilled'

      short_name='Bedtime'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.575 18.475Q18.2 20.1 16.238 21.05 14.275 22 12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-3.675 2.312-6.475 2.313-2.8 6.188-3.4.725-.125 1.038.337.312.463.037 1.213-.75 2.1-.525 4.237.225 2.138 1.225 3.938 1 1.8 2.688 3.112 1.687 1.313 3.862 1.788.8.175 1.012.675.213.5-.262 1.05Z"/>
    </Icon>
  );
});

IconMaterialBedtimeFilled.displayName = 'AmauiIconMaterialBedtimeFilled';

export default IconMaterialBedtimeFilled;
