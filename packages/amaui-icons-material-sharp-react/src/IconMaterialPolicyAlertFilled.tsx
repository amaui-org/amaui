import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPolicyAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicyAlertFilled'

      short_name='PolicyAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v200h-80v264L618-398q11-19 16.5-39.5T640-480q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47q21 0 41.5-5.5T560-342l128 128q-46 50-93 83.5T480-80Zm0-320q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM840-80q-17 0-28.5-11.5T800-120q0-17 11.5-28.5T840-160q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80Zm-40-160v-240h80v240h-80Z"/>
    </Icon>
  );
});

IconMaterialPolicyAlertFilled.displayName = 'AmauiIconMaterialPolicyAlertFilled';

export default IconMaterialPolicyAlertFilled;
