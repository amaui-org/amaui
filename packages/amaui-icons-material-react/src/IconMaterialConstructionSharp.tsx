import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialConstructionSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConstructionSharp'
      short_name='Construction'

      {...props}
    >
      <path d="M18.9 21 13.425 15.525 15.525 13.425 21 18.9ZM5.1 21 3 18.9 9.9 12 8.2 10.3 7.5 11 6.225 9.725V11.775L5.525 12.475L2.5 9.45L3.2 8.75H5.25L4 7.5L7.55 3.95Q8.05 3.45 8.625 3.225Q9.2 3 9.8 3Q10.4 3 10.975 3.225Q11.55 3.45 12.05 3.95L9.75 6.25L11 7.5L10.3 8.2L12 9.9L14.25 7.65Q14.15 7.375 14.088 7.075Q14.025 6.775 14.025 6.475Q14.025 5 15.038 3.987Q16.05 2.975 17.525 2.975Q17.9 2.975 18.238 3.05Q18.575 3.125 18.925 3.275L16.45 5.75L18.25 7.55L20.725 5.075Q20.9 5.425 20.963 5.762Q21.025 6.1 21.025 6.475Q21.025 7.95 20.013 8.962Q19 9.975 17.525 9.975Q17.225 9.975 16.925 9.925Q16.625 9.875 16.35 9.75Z"/>
    </Icon>
  );
});

IconMaterialConstructionSharp.displayName = 'AmauiIconMaterialConstructionSharp';

export default IconMaterialConstructionSharp;
