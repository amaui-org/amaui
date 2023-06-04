import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIntegrationInstructionsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IntegrationInstructionsW100Filled'

      short_name='IntegrationInstructions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.6 14.65.5-.5L7.95 12l2.15-2.15-.5-.5L6.95 12Zm4.8 0L17.05 12 14.4 9.35l-.5.5L16.05 12l-2.15 2.15ZM4.3 19.7V4.3h6.35q-.275-.725.15-1.363.425-.637 1.2-.637.8 0 1.225.637.425.638.125 1.363h6.35v15.4ZM12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialIntegrationInstructionsW100Filled.displayName = 'AmauiIconMaterialIntegrationInstructionsW100Filled';

export default IconMaterialIntegrationInstructionsW100Filled;
