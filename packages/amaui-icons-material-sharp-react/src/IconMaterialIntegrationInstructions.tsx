import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIntegrationInstructions = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IntegrationInstructions'

      short_name='IntegrationInstructions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.6 15.6 1.4-1.45L8.85 12 11 9.85 9.6 8.4 6 12Zm4.8 0L18 12l-3.6-3.6L13 9.85 15.15 12 13 14.15ZM5 19h14V5H5Zm-2 2V3h6.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H21v18Zm9-16.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterialIntegrationInstructions.displayName = 'AmauiIconMaterialIntegrationInstructions';

export default IconMaterialIntegrationInstructions;
