import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoxEdit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxEdit'

      short_name='BoxEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M216-720h528l-34-40H250l-34 40Zm184 270 80-40 80 40v-190H400v190ZM200-120q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v143q-20-5-40.5-3T760-549v-91H640v200l-80 80-80-40-102 51q-20 10-39-1.5T320-385v-255H200v440h240q17 0 28.5 11.5T480-160q0 17-11.5 28.5T440-120H200Zm420-60h42l155-154 42 42-160 160q-6 6-13.5 9t-15.5 3h-70q-17 0-28.5-11.5T560-160v-70q0-8 3-15.5t9-13.5l160-160 43 43-155 154v42Zm239-112L732-419l50-50q11-11 28-11t28 11l71 71q11 11 11 28t-11 28l-50 50ZM640-640h120-120Zm-440 0h360-360Z"/>
    </Icon>
  );
});

IconMaterialBoxEdit.displayName = 'AmauiIconMaterialBoxEdit';

export default IconMaterialBoxEdit;
