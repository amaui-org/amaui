import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPolicyAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicyAlert'

      short_name='PolicyAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v200h-80v-145l-240-90-240 90v189q0 121 68 220t172 132q26-8 49.5-20.5T576-214l56 56q-33 27-71.5 47T480-80Zm360 0q-17 0-28.5-11.5T800-120q0-17 11.5-28.5T840-160q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80Zm-40-160v-240h80v240h-80ZM480-480Zm0 80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0 80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 22-5.5 42.5T618-398l119 118-57 57-120-119q-18 11-38.5 16.5T480-320Z"/>
    </Icon>
  );
});

IconMaterialPolicyAlert.displayName = 'AmauiIconMaterialPolicyAlert';

export default IconMaterialPolicyAlert;
