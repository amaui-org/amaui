import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeployedCodeAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeAlertFilled'

      short_name='DeployedCodeAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-120q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6ZM440-869q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v169q-34-24-74.5-37T680-520q-17 0-32.5 1.5T616-513l108-62q15-8 18.5-25t-5.5-31q-8-14-23.5-17.5T684-644L480-526 276-644q-14-8-29-4.5T223-631q-9 14-5.5 31t18.5 25l204 118v73q-19 32-29.5 68T400-240q0 42 11.5 80T444-89q-1-1-2-1t-2-1L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161ZM680-40q-83 0-141.5-58.5T480-240q0-83 58.5-141.5T680-440q83 0 141.5 58.5T880-240q0 83-58.5 141.5T680-40Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeAlertFilled.displayName = 'AmauiIconMaterialDeployedCodeAlertFilled';

export default IconMaterialDeployedCodeAlertFilled;
