import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeployedCodeHistoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeHistoryFilled'

      short_name='DeployedCodeHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m746-146 28-28-74-74v-112h-40v128l86 86ZM120-275v-410l360-207 360 207v215q-34-24-74.5-37T680-520q-17 0-32.5 1.5T616-513l144-83v-42l-43-25-237 137-237-137-43 25v42l240 139v73q-19 32-29.5 68T400-240q0 42 11.5 80T444-89L120-275ZM680-40q-83 0-141.5-58.5T480-240q0-83 58.5-141.5T680-440q83 0 141.5 58.5T880-240q0 83-58.5 141.5T680-40Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeHistoryFilled.displayName = 'AmauiIconMaterialDeployedCodeHistoryFilled';

export default IconMaterialDeployedCodeHistoryFilled;
