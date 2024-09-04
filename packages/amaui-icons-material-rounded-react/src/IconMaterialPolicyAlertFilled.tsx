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
      <path d="M160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v145q-33 0-56.5 23.5T720-480v184L618-398q11-19 16.5-39.5T640-480q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47q21 0 41.5-5.5T560-342l128 128q-39 43-79 73.5T516-91q-9 3-18 4.5T480-85q-9 0-18.5-1.5T443-91q-125-45-204-164t-79-261Zm320 116q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM840-80q-17 0-28.5-11.5T800-120q0-17 11.5-28.5T840-160q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80Zm-40-200v-160q0-17 11.5-28.5T840-480q17 0 28.5 11.5T880-440v160q0 17-11.5 28.5T840-240q-17 0-28.5-11.5T800-280Z"/>
    </Icon>
  );
});

IconMaterialPolicyAlertFilled.displayName = 'AmauiIconMaterialPolicyAlertFilled';

export default IconMaterialPolicyAlertFilled;
